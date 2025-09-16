import { useFlower } from '@flowerforce/flower-react';
import { useFlowerForm } from '@flowerforce/flower-react-form';
import { useEffect } from 'react';
import { BASE_URL } from '../constants';
import { Loader } from '../components/Loader';

export const FetchDocuments = () => {
  const { setData } = useFlowerForm();
  const { next } = useFlower();

  useEffect(() => {
    const api = async () => {
      const res = await fetch(`${BASE_URL!}/getDocuments`);
      const data = await res.json();

      const documents = data.reduce(
        (acc: any, doc: any) => ({ ...acc, [doc.id]: doc }),
        {}
      );

      setData(documents, 'documents');

      next();
    };
    api();
  }, []);
  return <Loader />;
};
