import { FC } from 'react';
import { AppProviders } from './providers/app-providers';

import './styles/index.css';

export const AppRoot: FC = () => {
  return (
    <AppProviders>
      <div>
        <h1>HUI = zalupa</h1>
      </div>
    </AppProviders>
  );
};
