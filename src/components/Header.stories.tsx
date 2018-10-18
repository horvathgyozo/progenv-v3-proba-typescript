import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { stores } from '../services/stores';
import wrapWithStore from '../storybook-wrappers/wrap-store';
import { Header } from './Header';

storiesOf('Header', module)
  .addDecorator(wrapWithStore(stores))
  .add('default', () => (
    <Header title="Győző" />
  ))
  .add('Marci', () => (
    <Header title="Marci" />
  ))