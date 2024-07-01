import Image from "next/image";
import appleIcon from "./../../public/appleIcon.webp";
import craneIcon from "./../../public/craneIcon.webp";
import emojiIcon from "./../../public/emojiIcon.webp";
import folderIcon from "./../../public/folderIcon.webp";
import invadersIcon from "./../../public/invadersIcon.webp";
import penguinIcon from "./../../public/penguinIcon.webp";
import robotIcon from "./../../public/robotIcon.webp";
import snakeIcon from "./../../public/snakeIcon.webp";
import userIcon from "./../../public/userIcon.webp";
import windowIcon from "./../../public/windowIcon.webp";

interface IconProperties {
    width?: number;
    className?: string;
}

/*
Ícones Menu: utilizados nos itens do menu de usuário e do menu de navegação.
*/
// Ícones SVG
export const ProfileIcon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} viewBox="0 0 12 18" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <path d="M2.54962 4.4C2.54962 5.30174 2.90783 6.16654 3.54546 6.80416C4.18308 7.44179 5.04789 7.8 5.94962 7.8C6.85136 7.8 7.71616 7.44179 8.35378 6.80416C8.99141 6.16654 9.34962 5.30174 9.34962 4.4C9.34962 3.49826 8.99141 2.63346 8.35378 1.99584C7.71616 1.35821 6.85136 1 5.94962 1C5.04789 1 4.18308 1.35821 3.54546 1.99584C2.90783 2.63346 2.54962 3.49826 2.54962 4.4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M0.849609 16.3002V14.6002C0.849609 13.6985 1.20782 12.8337 1.84545 12.196C2.48307 11.5584 3.34787 11.2002 4.24961 11.2002H7.64961C8.55135 11.2002 9.41615 11.5584 10.0538 12.196C10.6914 12.8337 11.0496 13.6985 11.0496 14.6002V16.3002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const SettingsIcon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} viewBox="0 0 16 16" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <path d="M5.25 7.6999C5.25 8.3762 5.51866 9.02481 5.99688 9.50302C6.4751 9.98124 7.1237 10.2499 7.8 10.2499C8.4763 10.2499 9.1249 9.98124 9.60312 9.50302C10.0813 9.02481 10.35 8.3762 10.35 7.6999C10.35 7.0236 10.0813 6.375 9.60312 5.89678C9.1249 5.41856 8.4763 5.1499 7.8 5.1499C7.1237 5.1499 6.4751 5.41856 5.99688 5.89678C5.51866 6.375 5.25 7.0236 5.25 7.6999Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.7002 3.6001C2.7002 3.04781 3.14791 2.6001 3.7002 2.6001H5.26098C5.5262 2.6001 5.78055 2.49474 5.96809 2.3072L7.09309 1.1822C7.48361 0.79168 8.11678 0.79168 8.5073 1.1822L9.6323 2.3072C9.81984 2.49474 10.0742 2.6001 10.3394 2.6001H11.9002C12.4525 2.6001 12.9002 3.04781 12.9002 3.6001V5.16088C12.9002 5.4261 13.0056 5.68045 13.1931 5.86799L14.3181 6.99299C14.7086 7.38351 14.7086 8.01668 14.3181 8.4072L13.1931 9.5322C13.0056 9.71974 12.9002 9.97409 12.9002 10.2393V11.8001C12.9002 12.3524 12.4525 12.8001 11.9002 12.8001H10.3394C10.0742 12.8001 9.81984 12.9055 9.6323 13.093L8.5073 14.218C8.11678 14.6085 7.48361 14.6085 7.09309 14.218L5.96809 13.093C5.78055 12.9055 5.5262 12.8001 5.26098 12.8001H3.7002C3.14791 12.8001 2.7002 12.3524 2.7002 11.8001V10.2393C2.7002 9.97409 2.59484 9.71974 2.4073 9.5322L1.2823 8.4072C0.891778 8.01668 0.891778 7.38351 1.2823 6.99299L2.4073 5.86799C2.59484 5.68045 2.7002 5.4261 2.7002 5.16088V3.6001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const SignoutIcon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} height="18" viewBox="0 0 18 18" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <path d="M10.2054 5.83104V4.37328C10.2054 3.98666 10.0518 3.61588 9.77841 3.34249C9.50502 3.06911 9.13424 2.91553 8.74762 2.91553H3.64547C3.25885 2.91553 2.88806 3.06911 2.61468 3.34249C2.3413 3.61588 2.18771 3.98666 2.18771 4.37328V13.1198C2.18771 13.5064 2.3413 13.8772 2.61468 14.1506C2.88806 14.424 3.25885 14.5776 3.64547 14.5776H8.74762C9.13424 14.5776 9.50502 14.424 9.77841 14.1506C10.0518 13.8772 10.2054 13.5064 10.2054 13.1198V11.6621" stroke="#BB4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.55969 8.74645H15.3062L13.1196 6.55981" stroke="#BB4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.1191 10.9337L15.3058 8.74707" stroke="#BB4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


/*
Ícones Tag: utilizados nos itens do menu de navegação e no título da Super Tag.
Para os itens do menu, utilizar largura 29px e para o título da Super Tag usar 50px de largura.
O uso de classes CSS (className) é opcional.
*/
// tipo SVG.
export const Number1Icon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} viewBox="0 0 25 23" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_7_1055)">
            <path d="M23.2359 0H1.16668C0.522339 0 0 0.490629 0 1.09585V21.8253C0 22.4306 0.522339 22.9212 1.16668 22.9212H23.2359C23.8803 22.9212 24.4026 22.4306 24.4026 21.8253V1.09585C24.4026 0.490629 23.8803 0 23.2359 0Z" fill="#8DB0C0"/>
            <mask id="mask0_7_1055" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="23">
                <path d="M23.2359 0H1.16668C0.522339 0 0 0.490629 0 1.09585V21.8253C0 22.4306 0.522339 22.9212 1.16668 22.9212H23.2359C23.8803 22.9212 24.4026 22.4306 24.4026 21.8253V1.09585C24.4026 0.490629 23.8803 0 23.2359 0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_7_1055)">
                <path d="M20.2193 3.38361V18.9918H3.60229C2.40191 20.3016 1.20038 21.6114 0 22.9212H24.4026V0C23.0082 1.1275 21.6137 2.2561 20.2193 3.38361Z" fill="#407788"/>
            </g>
            <path d="M4.40059 4.57441C3.57323 5.47161 3.70453 6.73773 3.62087 6.73227C3.56858 6.729 3.52674 6.24766 3.60925 3.806C3.61506 3.62045 3.77426 3.46873 3.97296 3.46109C6.56777 3.35413 7.08139 3.4087 7.08836 3.47637C7.10115 3.59971 5.37437 3.52112 4.40059 4.5755V4.57441Z" fill="#A1C9D7"/>
            <path d="M11.9372 16C11.6572 16 11.4272 15.915 11.2472 15.745C11.0672 15.565 10.9772 15.345 10.9772 15.085V7.525L11.1872 7.855L10.0922 8.665C9.95219 8.775 9.77719 8.83 9.56719 8.83C9.32719 8.83 9.11719 8.74 8.93719 8.56C8.75719 8.38 8.66719 8.165 8.66719 7.915C8.66719 7.595 8.82219 7.335 9.13219 7.135L11.2922 5.695C11.3922 5.625 11.5022 5.575 11.6222 5.545C11.7522 5.515 11.8722 5.5 11.9822 5.5C12.2722 5.5 12.5022 5.59 12.6722 5.77C12.8422 5.94 12.9272 6.155 12.9272 6.415V15.085C12.9272 15.345 12.8322 15.565 12.6422 15.745C12.4622 15.915 12.2272 16 11.9372 16Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0_7_1055">
                <rect width="24.4026" height="22.9212" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

export const Number2Icon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} viewBox="0 0 25 23" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_7_894)">
            <path d="M23.2359 0H1.16668C0.522339 0 0 0.490629 0 1.09585V21.8253C0 22.4306 0.522339 22.9212 1.16668 22.9212H23.2359C23.8803 22.9212 24.4026 22.4306 24.4026 21.8253V1.09585C24.4026 0.490629 23.8803 0 23.2359 0Z" fill="#8DB0C0"/>
            <mask id="mask0_7_894" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="23">
                <path d="M23.2359 0H1.16668C0.522339 0 0 0.490629 0 1.09585V21.8253C0 22.4306 0.522339 22.9212 1.16668 22.9212H23.2359C23.8803 22.9212 24.4026 22.4306 24.4026 21.8253V1.09585C24.4026 0.490629 23.8803 0 23.2359 0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_7_894)">
                <path d="M20.2193 3.38361V18.9918H3.60229C2.40191 20.3016 1.20038 21.6114 0 22.9212H24.4026V0C23.0082 1.1275 21.6137 2.2561 20.2193 3.38361Z" fill="#407788"/>
            </g>
            <path d="M4.40059 4.57441C3.57323 5.47161 3.70453 6.73773 3.62087 6.73227C3.56858 6.729 3.52674 6.24766 3.60925 3.806C3.61506 3.62045 3.77426 3.46873 3.97296 3.46109C6.56777 3.35413 7.08139 3.4087 7.08836 3.47637C7.10115 3.59971 5.37437 3.52112 4.40059 4.5755V4.57441Z" fill="#A1C9D7"/>
            <path d="M14.5399 14.35C14.7799 14.35 14.9799 14.43 15.1399 14.59C15.2999 14.75 15.3799 14.95 15.3799 15.19C15.3799 15.42 15.2999 15.615 15.1399 15.775C14.9799 15.925 14.7799 16 14.5399 16H9.43992C9.17992 16 8.97492 15.92 8.82492 15.76C8.67492 15.6 8.59992 15.395 8.59992 15.145C8.59992 14.895 8.68992 14.675 8.86992 14.485L12.1399 10.99C12.5099 10.59 12.7999 10.18 13.0099 9.76C13.2299 9.34 13.3399 8.975 13.3399 8.665C13.3399 8.165 13.1949 7.765 12.9049 7.465C12.6149 7.155 12.2299 7 11.7499 7C11.5599 7 11.3649 7.045 11.1649 7.135C10.9649 7.225 10.7699 7.35 10.5799 7.51C10.3999 7.67 10.2299 7.855 10.0699 8.065C9.94992 8.225 9.82992 8.325 9.70992 8.365C9.58992 8.405 9.47992 8.425 9.37992 8.425C9.15992 8.425 8.95492 8.345 8.76492 8.185C8.58492 8.015 8.49492 7.82 8.49492 7.6C8.49492 7.43 8.54992 7.265 8.65992 7.105C8.77992 6.945 8.92492 6.78 9.09492 6.61C9.34492 6.36 9.62492 6.14 9.93492 5.95C10.2449 5.76 10.5649 5.615 10.8949 5.515C11.2249 5.405 11.5449 5.35 11.8549 5.35C12.5249 5.35 13.1049 5.485 13.5949 5.755C14.0949 6.015 14.4799 6.39 14.7499 6.88C15.0199 7.36 15.1549 7.93 15.1549 8.59C15.1549 9.14 14.9899 9.755 14.6599 10.435C14.3399 11.105 13.9049 11.735 13.3549 12.325L11.3299 14.485L11.1649 14.35H14.5399Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0_7_894">
                <rect width="24.4026" height="22.9212" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

export const Number3Icon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} viewBox="0 0 25 24" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_7_921)">
            <path d="M23.2359 6.10352e-05H1.16668C0.522339 6.10352e-05 0 0.49069 0 1.09591V21.8254C0 22.4306 0.522339 22.9213 1.16668 22.9213H23.2359C23.8803 22.9213 24.4026 22.4306 24.4026 21.8254V1.09591C24.4026 0.49069 23.8803 6.10352e-05 23.2359 6.10352e-05Z" fill="#8DB0C0"/>
            <mask id="mask0_7_921" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="23">
                <path d="M23.2359 6.10352e-05H1.16668C0.522339 6.10352e-05 0 0.49069 0 1.09591V21.8254C0 22.4306 0.522339 22.9213 1.16668 22.9213H23.2359C23.8803 22.9213 24.4026 22.4306 24.4026 21.8254V1.09591C24.4026 0.49069 23.8803 6.10352e-05 23.2359 6.10352e-05Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_7_921)">
                <path d="M20.2193 3.38367V18.9919H3.60229C2.40191 20.3017 1.20038 21.6115 0 22.9213H24.4026V6.10352e-05C23.0082 1.12757 21.6137 2.25616 20.2193 3.38367Z" fill="#407788"/>
            </g>
            <path d="M4.40059 4.57447C3.57323 5.47167 3.70453 6.73779 3.62087 6.73234C3.56858 6.72906 3.52674 6.24772 3.60925 3.80606C3.61506 3.62051 3.77426 3.46879 3.97296 3.46115C6.56777 3.35419 7.08139 3.40876 7.08836 3.47643C7.10115 3.59977 5.37437 3.52119 4.40059 4.57556V4.57447Z" fill="#A1C9D7"/>
        </g>
        <path d="M9.34797 13.885C9.43797 13.885 9.53297 13.9 9.63297 13.93C9.74297 13.96 9.86297 14.02 9.99297 14.11C10.163 14.24 10.363 14.355 10.593 14.455C10.833 14.555 11.108 14.605 11.418 14.605C11.728 14.605 12.018 14.53 12.288 14.38C12.568 14.22 12.798 14 12.978 13.72C13.158 13.43 13.248 13.085 13.248 12.685C13.248 12.305 13.168 11.99 13.008 11.74C12.858 11.49 12.653 11.3 12.393 11.17C12.143 11.04 11.873 10.975 11.583 10.975C11.363 10.975 11.178 10.995 11.028 11.035C10.888 11.075 10.748 11.12 10.608 11.17C10.478 11.21 10.323 11.23 10.143 11.23C9.91297 11.23 9.73297 11.15 9.60297 10.99C9.48297 10.83 9.42297 10.64 9.42297 10.42C9.42297 10.28 9.44797 10.155 9.49797 10.045C9.55797 9.935 9.64297 9.815 9.75297 9.685L12.393 6.88L12.798 7.225H9.10797C8.86797 7.225 8.66797 7.145 8.50797 6.985C8.34797 6.825 8.26797 6.625 8.26797 6.385C8.26797 6.155 8.34797 5.965 8.50797 5.815C8.66797 5.655 8.86797 5.575 9.10797 5.575H13.698C14.008 5.575 14.238 5.66 14.388 5.83C14.548 6 14.628 6.215 14.628 6.475C14.628 6.605 14.593 6.735 14.523 6.865C14.453 6.985 14.368 7.095 14.268 7.195L11.613 10.045L11.208 9.535C11.318 9.485 11.468 9.44 11.658 9.4C11.858 9.36 12.023 9.34 12.153 9.34C12.743 9.34 13.253 9.495 13.683 9.805C14.123 10.105 14.458 10.5 14.688 10.99C14.928 11.47 15.048 11.99 15.048 12.55C15.048 13.29 14.883 13.93 14.553 14.47C14.223 15.01 13.758 15.425 13.158 15.715C12.558 16.005 11.858 16.15 11.058 16.15C10.688 16.15 10.323 16.105 9.96297 16.015C9.60297 15.925 9.29297 15.805 9.03297 15.655C8.81297 15.535 8.66297 15.405 8.58297 15.265C8.51297 15.115 8.47797 14.975 8.47797 14.845C8.47797 14.615 8.55797 14.4 8.71797 14.2C8.88797 13.99 9.09797 13.885 9.34797 13.885Z" fill="white"/>
        <defs>
            <clipPath id="clip0_7_921">
                <rect width="24.4026" height="22.9212" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

export const NumberNIcon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} viewBox="0 0 25 23" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_7_906)">
            <path d="M23.2359 0H1.16668C0.522339 0 0 0.490629 0 1.09585V21.8253C0 22.4306 0.522339 22.9212 1.16668 22.9212H23.2359C23.8803 22.9212 24.4026 22.4306 24.4026 21.8253V1.09585C24.4026 0.490629 23.8803 0 23.2359 0Z" fill="#8DB0C0"/>
            <mask id="mask0_7_906" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="23">
            <path d="M23.2359 0H1.16668C0.522339 0 0 0.490629 0 1.09585V21.8253C0 22.4306 0.522339 22.9212 1.16668 22.9212H23.2359C23.8803 22.9212 24.4026 22.4306 24.4026 21.8253V1.09585C24.4026 0.490629 23.8803 0 23.2359 0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_7_906)">
            <path d="M20.2193 3.38361V18.9918H3.60229C2.40191 20.3016 1.20038 21.6114 0 22.9212H24.4026V0C23.0082 1.1275 21.6137 2.2561 20.2193 3.38361Z" fill="#407788"/>
            </g>
            <path d="M4.40059 4.57441C3.57323 5.47161 3.70453 6.73773 3.62087 6.73227C3.56858 6.729 3.52674 6.24766 3.60925 3.806C3.61506 3.62045 3.77426 3.46873 3.97296 3.46109C6.56777 3.35413 7.08139 3.4087 7.08836 3.47637C7.10115 3.59971 5.37437 3.52112 4.40059 4.5755V4.57441Z" fill="#A1C9D7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.75775 4.57177C10.306 4.63833 10.705 5.1377 10.6489 5.68712L10.4111 8.01587H13.6738L13.9362 5.44607C13.9923 4.89664 14.4823 4.5052 15.0305 4.57177C15.5788 4.63833 15.9778 5.1377 15.9216 5.68712L15.6839 8.01587H16.8492C17.4015 8.01587 17.8492 8.46358 17.8492 9.01587C17.8492 9.56815 17.4015 10.0159 16.8492 10.0159H15.4796L15.2046 12.7092H16.8492C17.4015 12.7092 17.8492 13.157 17.8492 13.7092C17.8492 14.2615 17.4015 14.7092 16.8492 14.7092H15.0004L14.7254 17.4028C14.6693 17.9522 14.1793 18.3436 13.6311 18.2771C13.0828 18.2105 12.6839 17.7111 12.74 17.1617L12.9904 14.7092H9.72763L9.4526 17.4028C9.3965 17.9522 8.90657 18.3436 8.35831 18.2771C7.81005 18.2105 7.41108 17.7111 7.46718 17.1617L7.7176 14.7092H6.73956C6.18728 14.7092 5.73956 14.2615 5.73956 13.7092C5.73956 13.157 6.18728 12.7092 6.73956 12.7092H7.92182L8.19684 10.0159H6.73956C6.18728 10.0159 5.73956 9.56815 5.73956 9.01587C5.73956 8.46358 6.18728 8.01587 6.73956 8.01587H8.40105L8.66346 5.44607C8.71956 4.89664 9.20949 4.5052 9.75775 4.57177ZM13.1946 12.7092L13.4696 10.0159H10.2069L9.93185 12.7092H13.1946Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0_7_906">
                <rect width="24.4026" height="22.9212" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

// tipo imagem
export const AppleIcon = ({width, className}: IconProperties) => (
    <Image className={className} width={width} src={appleIcon} alt="Ícone de usuário pequeno" />
);

export const CraneIcon = ({width, className}: IconProperties) => (
    <Image className={className} width={width} src={craneIcon} alt="Ícone de usuário pequeno" />
);

export const EmojiIcon = ({width, className}: IconProperties) => (
    <Image className={className} width={width} src={emojiIcon} alt="Ícone de usuário pequeno" />
);

export const FolderIcon = ({width, className}: IconProperties) => (
    <Image className={className} width={width} src={folderIcon} alt="Ícone de usuário pequeno" />
);

export const InvadersIcon = ({width, className}: IconProperties) => (
    <Image className={className} width={width} src={invadersIcon} alt="Ícone de usuário pequeno" />
);

export const PenguinIcon = ({width, className}: IconProperties) => (
    <Image className={className} width={width} src={penguinIcon} alt="Ícone de pinguim grande" />
);

export const RobotIcon = ({width, className}: IconProperties) => (
    <Image className={className} width={width} src={robotIcon} alt="Ícone de pinguim grande" />
);

export const SnakeIcon = ({width, className}: IconProperties) => (
    <Image className={className} width={width} src={snakeIcon} alt="Ícone de pinguim grande" />
);

export const UserIcon = ({width, className}: IconProperties) => (
    <Image className={className} width={width} src={userIcon} alt="Ícone de usuário grande" />
);

export const WindowIcon = ({width, className}: IconProperties) => (
    <Image className={className} width={width} src={windowIcon} alt="Ícone de usuário grande" />
);

/*
Ícones: utilizados ao lado da propriedade selecionada (o inicial é "TextPropIcon")
e no menu de seleção do tipo de propriedade.
*/
// Ícones SVG.
export const TitlePropIcon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} height="24" viewBox="0 0 24 24" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <path d="M13 5H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 9H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 15H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 19H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H8C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5V9C9 9.26522 8.89464 9.51957 8.70711 9.70711C8.51957 9.89464 8.26522 10 8 10H4C3.73478 10 3.48043 9.89464 3.29289 9.70711C3.10536 9.51957 3 9.26522 3 9V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 15C3 14.7348 3.10536 14.4804 3.29289 14.2929C3.48043 14.1054 3.73478 14 4 14H8C8.26522 14 8.51957 14.1054 8.70711 14.2929C8.89464 14.4804 9 14.7348 9 15V19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const AddPropIcon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} height="24" viewBox="0 0 24 24" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const TextPropIcon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} height="24" viewBox="0 0 24 24" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9H10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 13H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 17H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const RealPropIcon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} height="24" viewBox="0 0 18 21" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.6387 2V6.45833H15.5137V2H13.6387ZM12.1207 0.482054C12.4294 0.1734 12.848 0 13.2845 0H15.8678C16.3043 0 16.723 0.1734 17.0316 0.482054C17.3403 0.790708 17.5137 1.20933 17.5137 1.64583V6.8125C17.5137 7.249 17.3403 7.66762 17.0316 7.97628C16.723 8.28494 16.3043 8.45833 15.8678 8.45833H13.2845C12.848 8.45833 12.4294 8.28494 12.1207 7.97628C11.8121 7.66762 11.6387 7.249 11.6387 6.8125V1.64583C11.6387 1.20933 11.8121 0.790708 12.1207 0.482054ZM7.17969 13.625V18.0833H9.05469V13.625H7.17969ZM5.66174 12.1071C5.9704 11.7984 6.38902 11.625 6.82552 11.625H9.40885C9.84535 11.625 10.264 11.7984 10.5726 12.1071C10.8813 12.4157 11.0547 12.8343 11.0547 13.2708V18.4375C11.0547 18.874 10.8813 19.2926 10.5726 19.6013C10.264 19.9099 9.84535 20.0833 9.40885 20.0833H6.82552C6.38902 20.0833 5.9704 19.9099 5.66174 19.6013C5.35309 19.2926 5.17969 18.874 5.17969 18.4375V13.2708C5.17969 12.8343 5.35309 12.4157 5.66174 12.1071ZM5.0924 1.12891C5.0924 0.576621 5.54012 0.128906 6.0924 0.128906H7.36566C7.91795 0.128906 8.36566 0.576621 8.36566 1.12891V7.49521C8.36566 8.04749 7.91795 8.49521 7.36566 8.49521C6.81338 8.49521 6.36566 8.04749 6.36566 7.49521V2.12891H6.0924C5.54012 2.12891 5.0924 1.68119 5.0924 1.12891ZM14.0052 12.5883C14.0052 12.036 14.4529 11.5883 15.0052 11.5883H16.2785C16.8308 11.5883 17.2785 12.036 17.2785 12.5883V18.9546C17.2785 19.5068 16.8308 19.9546 16.2785 19.9546C15.7262 19.9546 15.2785 19.5068 15.2785 18.9546V13.5883H15.0052C14.4529 13.5883 14.0052 13.1405 14.0052 12.5883ZM0 7.49393C0 6.94164 0.447715 6.49393 1 6.49393H1.01273C1.56502 6.49393 2.01273 6.94164 2.01273 7.49393C2.01273 8.04621 1.56502 8.49393 1.01273 8.49393H1C0.447715 8.49393 0 8.04621 0 7.49393ZM0 18.9533C0 18.401 0.447715 17.9533 1 17.9533H1.01273C1.56502 17.9533 2.01273 18.401 2.01273 18.9533C2.01273 19.5056 1.56502 19.9533 1.01273 19.9533H1C0.447715 19.9533 0 19.5056 0 18.9533Z" fill="white"/>
    </svg>
);

export const CheckboxPropIcon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} height="24" viewBox="0 0 24 24" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H15C15.5523 5 16 4.55228 16 4C16 3.44772 15.5523 3 15 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7957 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7957 21 18V12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12V18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V6C5 5.73478 5.10536 5.48043 5.29289 5.29289ZM13.4142 14L20.7071 6.70711C21.0976 6.31658 21.0976 5.68342 20.7071 5.29289C20.3166 4.90237 19.6834 4.90237 19.2929 5.29289L12 12.5858L9.70711 10.2929C9.31658 9.90237 8.68342 9.90237 8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.29289 11.7071L10.5858 14C11.3668 14.781 12.6332 14.781 13.4142 14Z" fill="white"/>
    </svg>
);

export const DatePropIcon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} height="24" viewBox="0 0 24 24" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <path d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3V7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 3V7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 11H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 15H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const IntegerPropIcon = ({width, className}: IconProperties) => (
    <svg className={className} width={width} height="24" viewBox="0 0 24 24" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.74984 3.00075C8.74984 2.69741 8.56711 2.42393 8.28685 2.30784C8.0066 2.19176 7.68401 2.25593 7.46951 2.47042L5.46951 4.47042C5.17662 4.76332 5.17662 5.23819 5.46951 5.53108C5.7624 5.82398 6.23728 5.82398 6.53017 5.53108L7.24984 4.81141V9.25038H6.50068C6.08647 9.25038 5.75068 9.58616 5.75068 10.0004C5.75068 10.4146 6.08647 10.7504 6.50068 10.7504H7.97581C7.98379 10.7506 7.9918 10.7508 7.99984 10.7508C8.00788 10.7508 8.01589 10.7506 8.02387 10.7504H9.50068C9.9149 10.7504 10.2507 10.4146 10.2507 10.0004C10.2507 9.58616 9.9149 9.25038 9.50068 9.25038H8.74984V3.00075ZM7.11596 15.1168C7.35038 14.8824 7.66832 14.7507 7.99984 14.7507C8.33136 14.7507 8.6493 14.8824 8.88372 15.1168C9.11814 15.3512 9.24984 15.6692 9.24984 16.0007C9.24984 16.0897 9.18714 16.3092 8.99454 16.6543C8.82829 16.9522 8.61684 17.2552 8.42951 17.5103L5.46951 20.4703C5.25501 20.6848 5.19084 21.0074 5.30693 21.2877C5.42301 21.5679 5.69649 21.7507 5.99984 21.7507H9.99984C10.4141 21.7507 10.7498 21.4149 10.7498 21.0007C10.7498 20.5865 10.4141 20.2507 9.99984 20.2507H7.8105L9.53017 18.531C9.55653 18.5046 9.58089 18.4764 9.60304 18.4464C9.80694 18.1704 10.0802 17.787 10.3044 17.3853C10.512 17.0132 10.7498 16.5026 10.7498 16.0007C10.7498 15.2713 10.4601 14.5719 9.94438 14.0561C9.42866 13.5404 8.72918 13.2507 7.99984 13.2507C7.27049 13.2507 6.57102 13.5404 6.0553 14.0561C5.53957 14.5719 5.24984 15.2713 5.24984 16.0007C5.24984 16.4149 5.58563 16.7507 5.99984 16.7507C6.41405 16.7507 6.74984 16.4149 6.74984 16.0007C6.74984 15.6692 6.88153 15.3512 7.11596 15.1168ZM15.9485 7.45961C16.451 7.25147 17.004 7.19701 17.5374 7.30312C18.0708 7.40923 18.5608 7.67115 18.9454 8.05574C19.33 8.44033 19.592 8.93034 19.6981 9.46379C19.8042 9.99723 19.7497 10.5502 19.5416 11.0527C19.3925 11.4127 19.1693 11.7352 18.8884 12.0003C19.1693 12.2654 19.3925 12.5879 19.5416 12.9479C19.7497 13.4504 19.8042 14.0033 19.6981 14.5368C19.592 15.0702 19.33 15.5602 18.9454 15.9448C18.5608 16.3294 18.0708 16.5913 17.5374 16.6974C17.004 16.8036 16.451 16.7491 15.9485 16.541C15.446 16.3328 15.0165 15.9803 14.7144 15.5281C14.4122 15.0759 14.2509 14.5442 14.2509 14.0003C14.2509 13.5861 14.5867 13.2503 15.0009 13.2503C15.4151 13.2503 15.7509 13.5861 15.7509 14.0003C15.7509 14.2475 15.8242 14.4892 15.9616 14.6947C16.0989 14.9003 16.2941 15.0605 16.5225 15.1551C16.751 15.2497 17.0023 15.2745 17.2448 15.2263C17.4872 15.178 17.71 15.059 17.8848 14.8842C18.0596 14.7094 18.1787 14.4866 18.2269 14.2441C18.2751 14.0017 18.2504 13.7503 18.1557 13.5219C18.0611 13.2935 17.9009 13.0983 17.6954 12.9609C17.4898 12.8236 17.2481 12.7503 17.0009 12.7503C16.5867 12.7503 16.2509 12.4145 16.2509 12.0003C16.2509 11.5861 16.5867 11.2503 17.0009 11.2503C17.2481 11.2503 17.4898 11.177 17.6954 11.0396C17.9009 10.9023 18.0611 10.707 18.1557 10.4786C18.2504 10.2502 18.2751 9.9989 18.2269 9.75642C18.1787 9.51395 18.0596 9.29122 17.8848 9.1164C17.71 8.94158 17.4872 8.82253 17.2448 8.7743C17.0023 8.72607 16.751 8.75083 16.5225 8.84543C16.2941 8.94004 16.0989 9.10026 15.9616 9.30582C15.8242 9.51138 15.7509 9.75306 15.7509 10.0003C15.7509 10.4145 15.4151 10.7503 15.0009 10.7503C14.5867 10.7503 14.2509 10.4145 14.2509 10.0003C14.2509 9.45639 14.4122 8.9247 14.7144 8.47247C15.0165 8.02023 15.446 7.66776 15.9485 7.45961Z" fill="white"/>
    </svg>
);

