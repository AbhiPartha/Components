import { ActivityIndicator, View } from 'react-native';
import React from 'react';

// Atoms
import CenteredView from '../../atoms/native/CenteredView';

const CenteredActivityIndicator = () => (
    <CenteredView>
        <ActivityIndicator />
    </CenteredView>
);

export default CenteredActivityIndicator;