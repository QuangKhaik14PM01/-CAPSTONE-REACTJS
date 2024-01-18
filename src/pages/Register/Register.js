// src/components/Register.js
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { baseService } from '../../services/baseService';

export default function Register(props) {
  const dispatch = useDispatch();
  const userService = new baseService();
  const [registrationError, setRegistrationError] = useState('');

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      nhapLaiMatKhau: '',
    },
    onSubmit: async (values) => {
      try {
        // Kiểm tra mật khẩu nhập lại
        if (values.matKhau !== values.nhapLaiMatKhau) {
          setRegistrationError('Mật khẩu nhập lại không khớp.');
          return;
        }

        // Gửi yêu cầu đăng ký
        const response = await userService.post('/QuanLyNguoiDung/DangKy', {
          taiKhoan: values.taiKhoan,
          matKhau: values.matKhau,
          maNhom: 'GP01', // Mã nhóm theo yêu cầu
          maLoaiNguoiDung: 'KhachHang', // Mã loại người dùng theo yêu cầu
        });

        // Xử lý khi đăng ký thành công
        if (response.status === 200) {
          // Lưu thông tin đăng nhập
          const loginData = {
            taiKhoan: values.taiKhoan,
            matKhau: values.matKhau,
          };
          localStorage.setItem('loginData', JSON.stringify(loginData));

          // Đăng nhập và chuyển hướng sang trang chính
          const action = dangNhapAction(loginData);
          dispatch(action);

          props.history.push('/');
        }
      } catch (error) {
        // Xử lý lỗi đăng ký
        console.error('Đăng ký thất bại:', error);
        setRegistrationError('Đăng ký thất bại, tài khoản có thể đã tồn tại.');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm">
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
          xl:text-bold">Đăng ký</h2>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">Tài khoản</div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào tài khoản"
              />
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">Mật khẩu</div>
              <input
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào mật khẩu"
              />
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">Nhập lại mật khẩu</div>
              <input
                type="password"
                name="nhapLaiMatKhau"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            {registrationError && (
              <div className="mt-4 text-red-500 text-sm font-bold">{registrationError}</div>
            )}
            <div className="mt-10">
              <button
                type="submit"
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg"
              >
                Đăng ký
              </button>
            </div>
          
          </div>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn đã có tài khoản ?{' '}
            <NavLink to="/login" className="cursor-pointer text-indigo-600 hover:text-indigo-800">
              Đăng nhập
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}