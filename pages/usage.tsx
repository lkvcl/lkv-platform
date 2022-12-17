import React from 'react';
import { Text } from '@geist-ui/react';
import { Amplify, Auth } from 'aws-amplify';
import awsExports from '../amplify-services/aws-exports';
Amplify.configure(awsExports);
Auth.configure(awsExports);
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Page = ({ signOut, user }) => (
  <div>

          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>



  </div>
);

export default withAuthenticator(Page);
