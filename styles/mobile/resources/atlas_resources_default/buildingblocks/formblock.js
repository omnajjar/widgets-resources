import {contrast, spacing, font, border } from '../../../core/variables';
import { Platform } from 'react-native';

/* ==========================================================================
   Form Block

   Used in default forms
========================================================================== */

//== Elements
//-------------------------------------------------------------------------------------------------------------------//

export const formTitle = {
    marginHorizontal: spacing.small,
    ...Platform.select({
        ios: {
            color: contrast.regular,
            fontSize: font.sizeSmall,
            textTransform: 'uppercase',
            marginBottom: spacing.smallest,
        },
        android: {
            color: contrast.high,
            fontWeight: font.weightSemiBold,
            marginBottom: spacing.smaller,
        },
    }),
};
