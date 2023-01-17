import React from 'react';
import Title from './title';
import Button from './side-button';
import './styles.scss';

function MonthHeader() {
    return (
        <div className="month-header">
            <Button direction="<" />
            <Title year={2079} month={5} />
            <Button direction=">" />
        </div>
    );
}

export default MonthHeader;
