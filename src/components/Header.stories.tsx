import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { authStore } from "../services/stores";
import wrapWithStore from "../storybook-wrappers/wrap-store";
import Header from './Header';

storiesOf('Header', module)
  .addDecorator(wrapWithStore({authStore}))
  .add('default', () => (
    <Header title="Győző" />
  ));