import React, {FC} from 'react';

const Loading: FC = () => {
    return (
        <div className="loader-wrap">
            <div className="background"/>
            <div className="loader"/>
            <div className="text">Загрузка</div>
        </div>
    );
};

export default Loading;