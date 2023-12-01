import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Card from '../../../components/Card';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 612
    }
});
