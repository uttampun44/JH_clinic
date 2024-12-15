import { useEffect, useState } from "react"

export default function useModal(){
    const [modal, setModal] = useState(false)
    const [isEditing, setEditing] = useState(false);

    function resetModal()
    {
        setModal(true)
    }

    function editing()
    {
        setEditing(true)
    }

    return {modal, setModal, resetModal, isEditing, setEditing, editing};
}