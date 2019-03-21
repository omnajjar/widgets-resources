import { Platform } from 'react-native';
import { button, spacing, font, contrast, border } from '../variables';
import merge from '../_helperfunctions/mergeobjects';

/* ==========================================================================
    Buttons

    Default Class For Mendix Button Widget
========================================================================== */
export const ActionButton = {
    button: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: button.primary.borderColor,
        backgroundColor: button.primary.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: button.borderRadius,
        ...Platform.select({
            ios: {
                paddingVertical: spacing.smaller,
                paddingHorizontal: spacing.regular,
            },
            android: {
                paddingVertical: spacing.smaller,
                paddingHorizontal: spacing.small,
            },
        }),
    },
    icon: {
        color: button.primary.color,
    },
    caption: {
        textAlign: 'center',
        color: button.primary.color,
    },
};

export const ActionButtonHeader = {
    button: {
        borderColor: button.header.borderColor,
        backgroundColor: button.header.backgroundColor,
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    icon: {
        color: button.header.color,
    },
    caption: {
        color: button.header.color,
    },
};

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Button Colors

export const btnSecondary = {
    button: {
        borderColor: button.secondary.borderColor,
        backgroundColor: button.secondary.backgroundColor,
    },
    icon: {
        color: button.secondary.color,
    },
    caption: {
        color: button.secondary.color,
    },
};
export const btnSuccess = {
    button: {
        borderColor: button.success.borderColor,
        backgroundColor: button.success.backgroundColor,
    },
    icon: {
        color: button.success.color,
    },
    caption: {
        color: button.success.color,
    },
};
export const btnWarning = {
    button: {
        borderColor: button.warning.borderColor,
        backgroundColor: button.warning.backgroundColor,
    },
    icon: {
        color: button.warning.color,
    },
    caption: {
        color: button.warning.color,
    },
};
export const btnDanger = {
    button: {
        borderColor: button.danger.borderColor,
        backgroundColor: button.danger.backgroundColor,
    },
    icon: {
        color: button.danger.color,
    },
    caption: {
        color: button.danger.color,
    },
};

// Button Icon Only
export const btnIconPrimary = {
    button: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        padding: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    icon: {
        color: button.primary.backgroundColor,
    },
    caption: {
        fontSize: 0,
    },
};
export const btnIconSecondary = merge(btnIconPrimary, {
    icon: {
        color: contrast.low,
    },
});
export const btnIconSuccess = merge(btnIconPrimary, {
    icon: {
        color: button.success.backgroundColor,
    },
});
export const btnIconWarning = merge(btnIconPrimary, {
    icon: {
        color: button.warning.backgroundColor,
    },
});
export const btnIconDanger = merge(btnIconPrimary, {
    icon: {
        color: button.danger.backgroundColor,
    },
});

// Button border
export const btnRoundedBorder = {
    button: {
        borderRadius: button.borderRadiusRounded,
    },
};

// Button sizes
export const btnSmall = {
    icon: {
        size: font.sizeSmall,
    },
    caption: {
        fontSize: font.sizeSmall,
    },
};
export const btnLarge = {
    icon: {
        size: font.sizeLarge,
    },
    caption: {
        fontSize: font.sizeLarge,
    },
};

export const btnBlock = {
    button: {
        width: '100%',
    },
};
