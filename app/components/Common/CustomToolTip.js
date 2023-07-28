import { useState } from 'react';
import { Pressable } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

const CustomToolTip = ({ icon, message, position, style }) => {

    const [tip, setTip] = useState(false);

    return (
        <Tooltip isVisible={tip} content={message} placement={position} onClose={() => setTip(false)}>
            <Pressable style={style} onPress={() => setTip(true)}>{icon}</Pressable>
        </Tooltip>
    )
}

export default CustomToolTip
