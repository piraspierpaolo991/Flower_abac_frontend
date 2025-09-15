import React from 'react';
import { Flower, FlowerAction, FlowerNode } from '@flowerforce/flower-react';
import { Login } from './Steps/Login';
import { Dashboard } from './Steps/Dashboard';
import { Detail } from './Steps/Detail';
import { LoginAction } from './Actions/LoginAction';
import { ReadDocumentAction } from './Actions/ReadDocumentAction';
import { OperationDeniedPage } from './Error/Denied';
import { DetailUpdate } from './Steps/DetailUpdate';
import { UpdateDocumentAction } from './Actions/UpdateDocumentAction';
import { DeleteDocumentAction } from './Actions/DeleteDocumentAction';
import { RetrieveDocForUpdateAction } from './Actions/RetrieveDocForUpdateAction';
import { DeletedPage } from './Steps/DeletedDocument';
import { FetchDocuments } from './Actions/FetchDocuments';
import { CanPerformAction } from './Actions/CanPerformAction';

export const App = () => {
  return (
    <Flower name="flow">
      <FlowerNode
        id="login"
        to={{
          'login-action': {
            rules: {
              $and: [
                { role: { $exists: true } },
                {
                  can: {
                    $can: { action: 'login' },
                  },
                },
              ],
            },
          },
        }}
      >
        <Login />
      </FlowerNode>

      <FlowerAction id="login-action" to={{ 'fetch-documents': null }}>
        <LoginAction />
      </FlowerAction>

      <FlowerAction id="fetch-documents" to={{ dashboard: null }}>
        <FetchDocuments />
      </FlowerAction>

      <FlowerNode
        id="dashboard"
        to={{
          'can-perform-action': {
            rules: { $and: [{ requestedAction: { $exists: true } }] },
          },
        }}
      >
        <Dashboard />
      </FlowerNode>

      <FlowerAction
        id="can-perform-action"
        to={{
          'read-document': {
            label: 'Can Read',
            rules: {
              $and: [
                { requestedAction: { $eq: 'read' } },
                { error: { $exists: false } },
              ],
            },
          },
          'retrieve-document': {
            label: 'Can Update',
            rules: {
              $and: [
                { requestedAction: { $eq: 'update' } },
                { error: { $exists: false } },
              ],
            },
          },
          'delete-document': {
            label: 'Delete Document',
            rules: {
              $and: [
                { requestedAction: { $eq: 'delete' } },
                { error: { $exists: false } },
              ],
            },
          },
          'operation-denied': {
            label: 'Operation Denied',
            rules: { $and: [{ error: { $eq: 'operation denied' } }] },
          },
        }}
      >
        <CanPerformAction />
      </FlowerAction>

      <FlowerAction id="read-document" to={{ detail: null }}>
        <ReadDocumentAction />
      </FlowerAction>

      <FlowerAction id="retrieve-document" to={{ 'detail-update': null }}>
        <RetrieveDocForUpdateAction />
      </FlowerAction>

      <FlowerAction id="delete-document" to={{ 'deleted-document': null }}>
        <DeleteDocumentAction />
      </FlowerAction>

      <FlowerNode id="detail">
        <Detail />
      </FlowerNode>

      <FlowerNode id="detail-update" to={{ 'update-document': null }}>
        <DetailUpdate />
      </FlowerNode>

      <FlowerAction id="update-document">
        <UpdateDocumentAction />
      </FlowerAction>

      <FlowerNode id="deleted-document">
        <DeletedPage />
      </FlowerNode>

      <FlowerNode id="operation-denied">
        <OperationDeniedPage />
      </FlowerNode>
    </Flower>
  );
};
