import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsAPI} from "./api/RequestsAPI";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import React, {ChangeEvent, useState} from "react";
import {ModalComp} from "./modal/ModalComp";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeTextAC, setModalVisibleAC} from "./modal/modalReducer";

export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    let dispatch = useDispatch();
    let headerText = useSelector<AppStoreType, string>(state => state.modal.headerText)
    let description = useSelector<AppStoreType, string>(state => state.modal.descriptionText)
    let active = useSelector<AppStoreType, boolean>(state => state.modal.active)

    const setOpenModal = () => {
        dispatch(setModalVisibleAC(true))
    }
    const setCloseModal = () => {
        dispatch(setModalVisibleAC(false))
    }

    const sendPostRequest = () => {
        RequestsAPI.postRequest(checked)
            .then((response) => {
                dispatch(changeTextAC(response.data.errorText, response.data.info))
            })
            .catch((error) => {
                console.log({...error});

                error.response
                    ? dispatch(changeTextAC(error.response.data.errorText, error.response.data.info))
                    : dispatch(changeTextAC(error.name, error.massage))
            })

            .finally(() => {
                setOpenModal()
            })
    }


    return (<div>
        <SuperCheckbox checked={checked} onChange={(e) => handleCheck(e)}>Значение</SuperCheckbox>
        <SuperButton onClick={sendPostRequest}> Send </SuperButton>
        {active ? <ModalComp description={description} headerText={headerText} handleOpen={setOpenModal}
                             handleClose={setCloseModal}/> : null}

    </div>)
}