import { useAbac, useFlower } from '@flowerforce/flower-react';
import { useFlowerForm } from '@flowerforce/flower-react-form';
import { useEffect } from 'react';
import { BASE_URL } from '../constants';
import { Loader } from '../components/Loader';

export const ReadDocumentAction = () => {
  const { getData, setData } = useFlowerForm();
  const { next } = useFlower();
  const { can } = useAbac();

  useEffect(() => {
    const resourceId = getData('resourceId');
    const document = getData(`documents.${resourceId}`);
    const authorization = can({ action: 'read', resource: document });

    if (!authorization) {
      setData('operation denied', 'error');
      next();
      return;
    }

    const api = async () => {
      const res = await fetch(`${BASE_URL!}/document/${resourceId}`);
      const data = await res.json();
      setData(data, 'document');

      next();
    };
    api();
  }, []);
  return <Loader />;
};
