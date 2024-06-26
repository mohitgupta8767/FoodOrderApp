import { useForm } from "react-hook-form";
import Button from "./elements/Button";
import { ReactComponent as ArrowRightSvg } from "../assets/icons/arrow-right-long-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { setAddress } from "../stores/userInfo/addressSlice";
import Modal from "./Model";
import { useState } from "react";
import CheckIcon from "../assets/icons/check.png";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../stores/cart/cartSlice";

export const AddressForm = ({ onTabSwitch }) => {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onSubmit = (data) => {
        if (data) {
            setShow(true);
            setModalData(data);
        }
    }
    const hideModal = () => {
        setShow(false);
        setModalData([]);
        dispatch(clearCart());
        navigate('/');
    };

    return (
        <form className="md:w-2/3 md:mx-auto px-3 pt-1" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="pt-4 text-2xl md:text-center">Address for the delivery</h3>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="streetAddress">Street Address</label>
                <input
                    {...register('address', { required: true })}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="street address"
                    type="text"
                    placeholder="Street Address"
                />
                {errors.address && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="city">City</label>
                    <input
                        {...register('city')}
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="city"
                        type="text"
                        placeholder="City"
                    />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="state">State</label>
                    <input
                        {...register('state')}
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="state"
                        type="text"
                        placeholder="state"
                    />
                </div>
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="country">Country</label>
                    <input
                        {...register('country')}
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="country"
                        type="text"
                        placeholder="Country"
                    />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="postalCode">Postal Code</label>
                    <input
                        {...register('postalCode')}
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="postal code"
                        type="text"
                        placeholder="Postal Code"
                    />
                </div>
            </div>
            <div style={{ display: "ruby-text" }}>
                <Button
                    type="submit"
                >Complete Order</Button>
            </div>
            {show && <Modal show={show} handleClose={hideModal}>
                <div style={{ display: "flex" }}>
                    <img src={CheckIcon} />
                    <h1 style={{ margin: "10px" }}>Order Placed Successfuly</h1>
                </div>
                <p>Your order is own its way and will be delivered <br />
                    {modalData.address} {modalData.city} {modalData.country} {modalData.state} {modalData.postalCode}
                    <br />
                    within the next 30 minutes.</p>
            </Modal>}
        </form>

    )
}