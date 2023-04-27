<template>
    <div class="modal">
        <CloseButton />

        <div class="modal-head">
            <h4>Deposit</h4>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="none"><defs><rect id="path_0" x="0" y="0" width="24" height="24" /></defs><g opacity="1" transform="translate(0 0)  rotate(0 12 12)"><mask id="bg-mask-0" fill="white"><use xlink:href="#path_0"></use></mask><g mask="url(#bg-mask-0)" ><path id="分组 1" fill-rule="evenodd" style="fill:#383838" transform="translate(0 -0.0000017844637386050852)  rotate(0 12.000000892231862 12.000000892231862)" opacity="1" d="M0 12C0 18.62 5.38 24 12 24C18.62 24 24 18.62 24 12C24 8.82 22.74 5.76 20.49 3.51C18.24 1.26 15.18 0 12 0C5.38 0 0 5.38 0 12Z M11.125 3.77716C10.765 3.99716 10.555 4.39716 10.585 4.81716L10.585 12.6072C10.595 13.2272 11.095 13.7272 11.715 13.7272L17.815 13.7272L17.815 13.7372C18.405 13.6972 18.855 13.2072 18.855 12.6172C18.855 12.0272 18.405 11.5372 17.815 11.4972L12.835 11.4972L12.835 4.81716C12.865 4.39716 12.655 3.99716 12.295 3.77716C11.935 3.54716 11.485 3.54716 11.125 3.77716Z " /></g></g></svg>
            </span>
        </div>

        <div class="calculator-box">
            <div class="inner">
                <div class="input-box input-box-shadow">
                    <div class="text">
                        DIM
                    </div>
                    <div class="text input-icons">
                        <input class="input-text" type="number" 
                            placeholder="Input Quantity" />
                        <span class="input-icon">D</span>
                    </div>
                </div>
                <div class="input-box">

                </div>
            </div>
            <div class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32" fill="none"><defs><rect id="path_0" x="0" y="0" width="32.00000000000001" height="32.00000000000001" /></defs><g opacity="1" transform="translate(0 0)  rotate(0 16.000000000000004 16.000000000000004)"><mask id="bg-mask-0" fill="white"><use xlink:href="#path_0"></use></mask><g mask="url(#bg-mask-0)" ><path id="路径 1" fill-rule="evenodd" style="fill:#A5D63F" transform="translate(1.3917192982456092 6.0568115942028955)  rotate(0 14.408140350877197 9.968024972129324)" opacity="1" d="M28.54,7.08C28.38,6.79 28.18,6.57 27.94,6.41C27.69,6.25 27.42,6.15 27.12,6.1C26.82,6.06 26.53,6.04 26.26,6.04C25.62,6.04 24.78,6.04 23.76,6.06C22.74,6.07 21.68,6.07 20.59,6.07C19.5,6.07 18.46,6.08 17.46,6.09C16.45,6.1 15.64,6.1 15.02,6.1C14.47,6.1 14.03,6.03 13.71,5.9C13.39,5.76 13.22,5.42 13.2,4.89C13.2,4.65 13.19,4.38 13.18,4.07C13.17,3.76 13.16,3.45 13.15,3.13C13.14,2.81 13.14,2.5 13.14,2.2L13.14,1.4C13.14,0.63 12.9,0.18 12.42,0.04C11.94,-0.1 11.32,0.13 10.58,0.73C9.89,1.28 9.12,1.91 8.26,2.62C7.39,3.32 6.51,4.03 5.62,4.74C4.72,5.46 3.86,6.15 3.02,6.82C2.19,7.5 1.48,8.09 0.88,8.6C0.28,9.09 -0.01,9.56 0,10.02C0.01,10.48 0.34,10.97 0.98,11.48C1.66,12.01 2.44,12.63 3.33,13.34C4.21,14.04 5.11,14.75 6.02,15.48C6.92,16.2 7.81,16.91 8.69,17.61C9.56,18.3 10.32,18.9 10.96,19.42C11.6,19.91 12.12,20.05 12.53,19.85C12.93,19.64 13.14,19.17 13.14,18.42C13.14,17.98 13.15,17.46 13.17,16.87C13.19,16.28 13.2,15.78 13.2,15.35C13.18,14.78 13.41,14.41 13.89,14.25C14.37,14.09 15.01,14.01 15.82,14.01L18.16,14.01C19.14,14.01 20.15,14 21.18,13.99C22.22,13.98 23.19,13.98 24.11,13.98L26.13,13.98C27.07,13.98 27.75,13.82 28.18,13.5C28.6,13.18 28.82,12.57 28.82,11.67C28.82,11.01 28.81,10.41 28.8,9.88C28.79,9.35 28.78,8.79 28.78,8.22C28.78,7.75 28.7,7.37 28.54,7.08Z " /></g></g></svg>
            </div>
            <div class="inner">
                <div class="input-box input-box-shadow">

                </div>
                <div class="input-box">

                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import CloseButton from '../components/CloseButton.vue';

</script>

<style scoped>
* {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.modal {
    position: relative;
    margin: 0 auto;
    background: #FFFFFF;
    width: 504px;
    height: 810px;
    border: 4px solid rgba(0, 0, 0, 1);            
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 30px 35px;
}
.modal-head {
    margin-top: 120px;
    /* margin-left: 20px;
    margin-right: 15px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal-head > h4 {
    font-size: 22px;
    font-weight: 600;
    color: rgba(165, 214, 63, 1);
}
.calculator-box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}
.calculator-box .arrow {
    margin: 0 10px;
    text-align: center;
    align-content: center;
    align-items: center;
    position: relative;
    top: 50px;
}
.calculator-box > .inner {
    width: 43%;
    position: relative;
}
.calculator-box .inner .input-box {
    width: 80%;
    position: absolute;
    height: 65px;
    opacity: 1;
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    border: 2px solid rgba(0, 0, 0, 1);            
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.8);
    padding: 20px;
}
.input-box-shadow{
    z-index: 10;
    top: -6px;
    left: -6px;
    margin-top: 0px;
    
}
.calculator-box .inner .input-box > .text {
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
    margin-bottom: 10px;
}
.calculator-box .inner .input-box .input-text {
    border-radius: 4px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 1);  
    box-shadow:inset 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    padding: 10px;
    padding-right: 35px;
    position: relative;
}
.input-icons span {
    position: absolute;
    padding: 3px 5px;
    border: solid 1px #000;
    border-radius: 50%;
    margin-top: 7px;
    margin-right: 7px;
}
.input-icons {
    width: 100%;
    margin-bottom: 10px;
}

</style>