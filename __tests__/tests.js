
import { configure, shallow, mount, render, setupMount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import 'whatwg-fetch';
import App from '../client/src/components/App.jsx';
import ReviewEntry from '../client/src/components/ReviewEntry.jsx';
import ReviewList from '../client/src/components/ReviewList.jsx';

configure({ adapter: new Adapter() });

/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
