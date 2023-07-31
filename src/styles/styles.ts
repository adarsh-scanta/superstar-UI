import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

*,
    body,
    html,
    a {
        font-family: 'Poppins', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        color: #F5F9FA;
        outline: 0;
        background-color: #0D1016;
        overflow-x: hidden;
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Poppins' ;
        color: #18216d; 
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #717697 #0D1016;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
    height:0px;
  }

  *::-webkit-scrollbar-track {
    background: #0D1016;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #717697;
    border-radius: 10px;
    border: 0px solid #ffffff;
  }

  .image-gallery-content{
    display: flex;  
    flex-direction: row-reverse;
    justify-content: space-between;
    @media only screen and (max-width: 768px) and (orientation: portrait) {
     display: block;
     }
}
  .image-gallery-slide-wrapper{
      width:80%;
  }
  .image-gallery-thumbnails-container{
display: flex;
// width:60px;
transform:none;

flex-direction: column;
@media only screen and (max-width: 768px) and (orientation : portrait) {
 flex-direction: row; 
 margin-top: 20px;
}
  }

 

 .image-gallery-slide{
     width:400px !important;
     height:360px !important;
    //  max-height:400px !important;
 }

 
 
 #basic_phone{
     background:#5b5b5b;
 }  

 .ant-modal-close-x{
  filter:invert(1);
 }

 .ant-input{
     color:#fff;
 }

 .ant-select-selection-item{
     color:#fff;
 }

.image-gallery-thumbnail {
  width:65px !important;
  margin:0.5rem 0;
//    height:65px;
  display: inline-block;
  border-radius:0px !important;
  z-index:2;
  position: relative;
  background-color: #0d1016;
}
.image-gallery-thumbnail::before {
  content: "";
  z-index: 0;
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: 10px;
  right: 10px;
  background-color: #0d1016;
}
.image-gallery-thumbnail::after {
  content: "";
  z-index: 0;
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: -5px;
  right: -5px;
  background-color: #0d1016;
}
 .image-gallery-thumbnail.active, .image-gallery-thumbnail:focus{
     border:4px solid #FFBE55 !important; 
    //  width:55px;
   height:65px;
 }
.image-gallery-thumbnail:hover{
     border:4px solid #FFBE55 !important;
          // width:55px;
}
.image-gallery-thumbnail:active{
     border:4px solid #FFBE55 !important;
          // width:55px;
   height:65px;
}
.ant-modal-content{
  background:#121825;
}
.ant-checkbox-checked{
    background-color: #FFBE55 !important;
    border-color: #FFBE55 !important;
}
.ant-collapse-arrow {
    color: #ffffff !important;
    position: relative;
    // top: -4px;
}
.css-1fzpoyk{
    width:70%;
    @media only screen and (max-width: 890px) {
    width:50%;
        }
}

.css-1qzevvg img{
    filter: invert(1);
    align-items: center;
    background: 0;
    border: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -20rem;
    transform: translateY(-50%);
    @media only screen and (max-width: 890px) {
    top: -15rem;
        }

}

.css-1qzevvg img:nth-child(1){
    left:-40rem;
     @media only screen and (max-width: 1760px) {
    left:-32rem;
        }
    @media only screen and (max-width: 1300px) {
    left:-28rem;
        }
        @media only screen and (max-width: 1080px) {
    left:-24rem;
        }
        @media only screen and (max-width: 890px) {
    left:-400%;
        }
}
.css-1qzevvg img:nth-child(2){
    right:-40rem;
     @media only screen and (max-width: 1760px) {
    right:-32rem;
        }
    @media only screen and (max-width: 1300px) {
    right:-28rem;
        }
        @media only screen and (max-width: 1080px) {
    right:-24rem;
        }
        @media only screen and (max-width: 890px) {
    right:-420%;
        }
}
/*Custom Search Bar */
.search-box {
  position: relative;
  top: 6px;
  left: -10px;
  // transform: translate(-55%, 0);
  background: #191c28;
  border: 1px solid #fff;
  height: 40px;
  border-radius: 50px;
  padding: 0.2rem;
}
.searchBar input{
  background-color:#232b38;
}
/* input */
.search-input {
  outline: none;
  border: none;
  background: none;
  width: 0;
  padding: 0;
  color: #fff;
  float: left;
  font-size: 14px;
  transition: .3s;
  line-height: 30px;
}

.search-input::placeholder {
  color: #dbc5b0;
}

/* icon */
.search-btn {
  color: #fff;
  float: right;
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background: #191c28;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: .3s;
}


.search-input:focus,
.search-input:not(:placeholder-shown) {
  width: 180px;
  padding: 0 6px;
  border:none;
}

.search-box:hover > .search-input {
  width: 180px;
  padding: 0 6px;
}

.search-box:hover > .search-btn,
.search-input:focus + .search-btn,
.search-input:not(:placeholder-shown) + .search-btn {
  // background: #fff;
  color: #191c28;
  
}
.image-gallery-slide{
  width:550px !important;
  height:320px !important; 

@media only screen and (min-width: 1366px) {
  width:550px !important;
  height:320px !important; 
}
}
.image-gallery-slide-wrapper {
  height:280px;
  position: relative !important;
  top: 2rem !important;
}
.image-gallery-thumbnail-image{
  // width:75px;
  height:55px;
  margin:auto;
}

.image-gallery-thumbnail-inner{
  // width:55px;
}
.ant-checkbox-checked .ant-checkbox-inner {
    background-color: #FFBE55;
    border: none;
}
.ant-checkbox-input:hover{
      border: 1px solid #FFBE55 !important;
}
.ant-switch-checked{
  background-color: #FFBE55 !important;
}

.image-gallery-slide.right{
  display: none !important;
}
.image-gallery-slide.center{
  width:90% !important;
  height:100% !important;
  margin: auto;
}

.image-gallery-slide-wrapper.bottom{
  height:100%;
  margin: auto;
}
.ant-input-search-button{
  // background-color: #FFBE55;
  border: none;
  background: linear-gradient(180deg, #FFBE55 27.4%, #FFAC27 100%);
box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
color:#020202;
font-weight: 700;
}
.ant-input-search-button:hover{
  background:linear-gradient(180deg, #FFBE55 27.4%, #FFAC27 100%);
  color:#020202;
}
.ant-input-search-with-button{
  border-radius:10px;
}
.search-input:focus{
  border: none !important;
}
.ant-input{
  font-size:1rem;
}
.ant-input[disabled]{
  color:#fff !important;
}

#payment-form button{
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
  margin : 1rem auto;
  background: linear-gradient(180deg, #ffbe55 26.35%, #ffac27 100%);
  border-radius: 6px;
  color:#020202;
}

.Label--empty{
  color:#fff !important;
}

.p-GridCell div div label{
  color:#fff !important; 
}

.ant-btn-loading{
background: linear-gradient(180deg, #ffbe55 30%, #ffac27 100%) !important;
    box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25) !important;

}
.ant-collapse-item{
  width:100%
  background:#00ff00;
  border: 1px solid #ff0000;
}


`;
