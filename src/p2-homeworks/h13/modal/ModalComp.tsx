import s from "./ModalComp.module.scss"

type ModalCompPropsType = {
    handleOpen: () => void;
    handleClose: () => void;
    headerText: string;
    description: string;
}
export const ModalComp = (props: ModalCompPropsType) => {
    return (
        <div className={s.container} onClick={props.handleClose}>
            <div className={s.modal}>
                <div className={s.modal__header}>
                    <h3>{props.headerText}</h3>
                </div>
                <div className={s.modal__body}>
                    {props.description}
                </div>
            </div>

        </div>
    )
}