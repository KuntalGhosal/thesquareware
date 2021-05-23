import React from 'react'
import { Radio } from 'antd';
import '../../index.css';

const Radiobtn = () => {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Radio.Group onChange={onChange} value={value} style={{ marginBottom: 8 }}>
            <Radio value={1}><p style={{ color: '#762F00' }}>Weiblich</p></Radio>
            <Radio value={2}><p style={{ color: '#762F00' }}>Männlich</p></Radio>
            <Radio value={3}><p style={{ color: '#762F00' }}>Divers</p></Radio>
        </Radio.Group>

    );
};
export default Radiobtn;
