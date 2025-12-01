<template>
    <Page class="page" actionBarHidden="true">
        <GridLayout class="main-container" rows="auto, *">
            <Label row="0" class="display" :text="displayValue" textWrap="true" />

            <GridLayout row="1" class="buttons-grid" rows="*, *, *, *, *" columns="*, *, *, *">
                <Button row="0" col="0" class="btn function-btn" 
                        :class="{ 'btn-active': isButtonActive('C') }"
                        @touch="onButtonTouch('C')" 
                        @tap="onButtonPress('C')" text="C" />
                <Button row="0" col="1" class="btn function-btn" 
                        :class="{ 'btn-active': isButtonActive('⌫') }"
                        @touch="onButtonTouch('⌫')" 
                        @tap="onButtonPress('⌫')" text="⌫" />
                <Button row="0" col="2" class="btn function-btn" 
                        :class="{ 'btn-active': isButtonActive('±') }"
                        @touch="onButtonTouch('±')" 
                        @tap="onButtonPress('±')" text="±" />
                <Button row="0" col="3" class="btn operator-btn" 
                        :class="{ 'btn-active': isButtonActive('÷') }"
                        @touch="onButtonTouch('÷')" 
                        @tap="onButtonPress('÷')" text="÷" />

                <Button row="1" col="0" class="btn number-btn" 
                        :class="{ 'btn-active': isButtonActive('7') }"
                        @touch="onButtonTouch('7')" 
                        @tap="onButtonPress('7')" text="7" />
                <Button row="1" col="1" class="btn number-btn" 
                        :class="{ 'btn-active': isButtonActive('8') }"
                        @touch="onButtonTouch('8')" 
                        @tap="onButtonPress('8')" text="8" />
                <Button row="1" col="2" class="btn number-btn" 
                        :class="{ 'btn-active': isButtonActive('9') }"
                        @touch="onButtonTouch('9')" 
                        @tap="onButtonPress('9')" text="9" />
                <Button row="1" col="3" class="btn operator-btn" 
                        :class="{ 'btn-active': isButtonActive('×') }"
                        @touch="onButtonTouch('×')" 
                        @tap="onButtonPress('×')" text="×" />

                <Button row="2" col="0" class="btn number-btn" 
                        :class="{ 'btn-active': isButtonActive('4') }"
                        @touch="onButtonTouch('4')" 
                        @tap="onButtonPress('4')" text="4" />
                <Button row="2" col="1" class="btn number-btn" 
                        :class="{ 'btn-active': isButtonActive('5') }"
                        @touch="onButtonTouch('5')" 
                        @tap="onButtonPress('5')" text="5" />
                <Button row="2" col="2" class="btn number-btn" 
                        :class="{ 'btn-active': isButtonActive('6') }"
                        @touch="onButtonTouch('6')" 
                        @tap="onButtonPress('6')" text="6" />
                <Button row="2" col="3" class="btn operator-btn" 
                        :class="{ 'btn-active': isButtonActive('-') }"
                        @touch="onButtonTouch('-')" 
                        @tap="onButtonPress('-')" text="-" />

                <Button row="3" col="0" class="btn number-btn" 
                        :class="{ 'btn-active': isButtonActive('1') }"
                        @touch="onButtonTouch('1')" 
                        @tap="onButtonPress('1')" text="1" />
                <Button row="3" col="1" class="btn number-btn" 
                        :class="{ 'btn-active': isButtonActive('2') }"
                        @touch="onButtonTouch('2')" 
                        @tap="onButtonPress('2')" text="2" />
                <Button row="3" col="2" class="btn number-btn" 
                        :class="{ 'btn-active': isButtonActive('3') }"
                        @touch="onButtonTouch('3')" 
                        @tap="onButtonPress('3')" text="3" />
                <Button row="3" col="3" class="btn operator-btn" 
                        :class="{ 'btn-active': isButtonActive('+') }"
                        @touch="onButtonTouch('+')" 
                        @tap="onButtonPress('+')" text="+" />

                <Button row="4" col="0" class="btn number-btn zero-btn" 
                        :class="{ 'btn-active': isButtonActive('0') }"
                        @touch="onButtonTouch('0')" 
                        @tap="onButtonPress('0')" text="0" />
                <Button row="4" col="1" class="btn number-btn" 
                        :class="{ 'btn-active': isButtonActive('.') }"
                        @touch="onButtonTouch('.')" 
                        @tap="onButtonPress('.')" text="." />
                <Button row="4" col="2" class="btn equals-btn" 
                        :class="{ 'btn-active': isButtonActive('=') }"
                        @touch="onButtonTouch('=')" 
                        @tap="onButtonPress('=')" text="=" />
                <Button row="4" col="3" class="btn operator-btn power-btn" 
                        :class="{ 'btn-active': isButtonActive('^') }"
                        @touch="onButtonTouch('q')" 
                        @tap="onButtonPress('q')" text="sqrt" />
            </GridLayout>
        </GridLayout>
    </Page>
</template>

<script>
import { Calculator } from '../models/calculator.ts';

export default {
        data() {
                return {
                        calculator: new Calculator(),
                        displayValue: '0',
                        activeButton: ''
                };
        },
    
        methods: {
                onButtonPress(buttonValue) {
                        this.displayValue = this.calculator.handleButtonPress(buttonValue);
                        this.activeButton = '';
                },
        
                onButtonTouch(buttonValue) {
                        this.activeButton = buttonValue;
                },
        
                isButtonActive(buttonValue) {
                        return this.activeButton === buttonValue;
                }
        }
};
</script>