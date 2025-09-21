import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function AccountItem(props) {
    return (
        <div className= { cx('wrapper')}>
            <img className= {cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/a48f8befd626afb7d072da3c219f306f~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=1df7af51&x-expires=1758621600&x-signature=47jtv2VxlRVhGX%2FZX27yKQTo5u4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1" alt="Hoaaa" />
            <div className={ cx('info')}>
                <h4 className={ cx('name')}> 
                    <span >Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon ={ faCheckCircle}/> 
                </h4>
                <span className={ cx('username')}>Nguyễn Văn A</span>

            </div>
        </div>
    );
}

export default AccountItem;