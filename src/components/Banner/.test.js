import React from 'react';
import { create } from 'react-test-renderer';
import Banner from '.';

describe('<Banner />', () => {
    it('should return match the snapshot', () => {
        const component = create(<Banner />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
