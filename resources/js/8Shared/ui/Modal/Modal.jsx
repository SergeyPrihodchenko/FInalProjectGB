import { ReactNode } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";

import { Overlay } from "../../redesigned/Overlay/Overlay";
import { Portal } from "../../redesigned/Portal/Portal";
import s from "./Modal.module.scss";
import { useModal } from "@/shared/lib/hooks/useModal";
import { toggleFeatures } from "@/shared/lib/features";

const ANIMATION_DELAY = 300;

export const Modal = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const { theme } = useTheme();

    // const mods: Mods = {
    //     [s.opened]: isOpen,
    //     [s.isClosing]: isClosing,
    // };

    //   className={classNames(s.modal, mods, [
    //     className,
    //     theme,
    //     "app_modal",
    //     toggleFeatures({
    //         name: "isAppRedesigned",
    //         on: () => s.modalNew,
    //         off: () => s.modalOld,
    //     }),
    // ])}

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById("app") ?? document.body}>
            <div>
                <Overlay onClick={close} />
                <div className={s.content}>{children}</div>
            </div>
        </Portal>
    );
};
