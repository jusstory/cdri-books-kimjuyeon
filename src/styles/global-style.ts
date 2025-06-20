import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  /* font Noto Sans KR */
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 200;
    src: url('/fonts/notokr-light.eot');
    src: url('/fonts/notokr-light.eot?#iefix') format('embedded-opentype'),
    url('/fonts/notokr-light.woff2') format('woff2'),
    url('/fonts/notokr-light.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/notokr-regular.eot');
    src: url('/fonts/notokr-regular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/notokr-regular.woff2') format('woff2'),
    url('/fonts/notokr-regular.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/notokr-medium.eot');
    src: url('/fonts/notokr-medium.eot?#iefix') format('embedded-opentype'),
    url('/fonts/notokr-medium.woff2') format('woff2'),
    url('/fonts/notokr-medium.woff') format('woff');
  }
  /* CSS 초기화 */
  * {
    box-sizing: border-box;
    word-break: keep-all;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
  html {
    width: 100%;
    overflow-x: hidden;
  }
  body {
    min-width: 360px;
    overflow-x: hidden;
    line-height: 1.25;
    background: #fff;
    min-height: 100vh;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, main {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-family:'Noto Sans KR', sans-serif;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* button, input, select, textarea 초기화 */
  button, input, select, textarea{
    padding:0;
    margin:0;
    border-radius:0;
    vertical-align:middle;
    font-size:100%;
    font-family: 'Noto Sans KR', sans-serif;
    background:transparent;
  }
  button,
  input[type="button"] {
    border:0 none;
  }
  button{
    cursor:pointer
  }
  button:focus {
    outline: none;
  }
  /* input 기본 스타일 초기화 */
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0 none;
  }
  input:focus {
    outline: none;
  }
  /* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
  input::-ms-clear { display: none; }
  /* input type number 에서 화살표 제거 */
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  textarea {
    resize: none;
    -webkit-appearance: none;
  }
  a {
    color: #fff;
    text-decoration: none;
    outline: none;
    &:hover, &:active {
      text-decoration: none;
      color:#fff;
    }
  }
  b {
    font-weight:700;
  }
`;
