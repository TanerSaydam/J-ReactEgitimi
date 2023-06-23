import React from 'react'

export default function Add(props) {
  return (
    <>
    Work
    <input 
      value={props.work} 
      onChange={(e)=> props.setWork(e.target.value)}/>
    <button ref={props.addRef} onClick={props.add}>Ekle</button>
    <button ref={props.updateRef} onClick={props.update} hidden="hidden">Güncelle</button>
    <button ref={props.cancelRef} onClick={props.cancel} hidden="hidden">Vazgeç</button>
    </>
  )
}
