import {
  step_one_detail, step_two_detail, step_three_detail, step_four_detail,
  step_one, step_two, step_three, step_four,
  zalopay, money, giftbox, wallet, security, bankcard,
} from '../utils/images'

export const serviceData = [
  {
    id: 1,
    title: 'Thanh toán ngay trong Zalo',
    image: zalopay,
  },
  {
    id: 2,
    title: 'Không cần chuẩn bị tiền lẻ',
    image: money,
  },
  {
    id: 3,
    title: 'Luôn có ưu đãi',
    image: giftbox,
  },
  {
    id: 4,
    title: 'Không lo quên ví',
    image: wallet,
  },
  {
    id: 5,
    title: 'An toàn bảo mật',
    image: security,
  },
  {
    id: 6,
    title: 'Thanh toán trực tiếp từ nhiều loại thẻ/ tài khoản NH',
    image: bankcard,
  },
];

export const stepDetailData = [
  {
    title: 'Cách mở ZaloPay trong Zalo',
    id: 1,
    image: step_one_detail,
    margin: '0px 0px 0px -18px'
  },
  {
    id: 2,
    title: 'Quét QR code',
    content: 'Bạn dùng chức năng quét QR trên ZaloPay để quét mã do Shipper cung cấp (trên điện thoại hoặc gói hàng)',
    image: step_two_detail,
    margin: '0px 0px 0px -18px'
  },
  {
    id: 3,
    title: 'Xác nhận thanh toán',
    content: 'Kiểm tra lại thông tin và bấm Xác nhận thanh toán trên màn hình thanh toán của ZaloPay',
    image: step_three_detail,
    margin: '0px 0px -14px 0px'
  },
  {
    id: 4,
    title: 'Nhận hàng',
    content: 'Đã hoàn tất thanh toán và nhận hàng từ Shipper',
    image: step_four_detail,
    margin: '0px'
  },
];

export const paginationData = [
  {
    id: 1,
    title: 'Mở ZaloPay',
    image: step_one,
  },
  {
    id: 2,
    title: 'Quét QR do shipper đưa',
    image: step_two,
  },
  {
    id: 3,
    title: 'Xác nhận thanh toán',
    image: step_three,
  },
  {
    id: 4,
    title: 'Nhận hàng',
    image: step_four,
  },
];

