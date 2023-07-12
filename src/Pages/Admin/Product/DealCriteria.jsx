import React from 'react'
import ModalLayout from '../../../Components/General/ModalLayout'

const DealCriteria = ({closeView, product}) => {
  return (
    <ModalLayout closeView={closeView}>
        <div className="bg-sky-50 p-3 rounded-lg shadow-xl">
            <div className="text-xl font-semibold text-slate-600">Criterials for creating a deal</div>
        </div>
        <div className="mt-5 p-3">
            <div className="grid grid-cols-2 mb-2">
                <div className="capitalize text-slate-700 text-sm"> (1) Banner Dimensions:</div>
                <div className="capitalize text-slate-700 text-sm text-right">1440 × 250</div>
            </div>
            <div className="capitalize text-slate-700 text-sm">(2) Banner should be customized to attract customers on first impression</div>
        </div>
    </ModalLayout>
  )
}

export default DealCriteria