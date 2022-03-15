import React from 'react';
import {cleanup, render,screen} from '@testing-library/react';
import AvatarDrop from '../AvatarDrop';
import '@testing-library/jest-dom';

afterEach(cleanup);
it('Checking the Avatar Drop',()=>{
   render(<AvatarDrop />);
    expect(screen.getByTestId("avatarDrop")).toBeInTheDocument();
});