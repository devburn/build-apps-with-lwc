import { api, LightningElement, track } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';
import LANG from '@salesforce/i18n/lang';

export default class TestCurrencyFieldCmp extends LightningElement {
    @track amt;
    @api curr = 'EUR';
    @api loc = 'de';
    lang = LANG;
    formattedNumber;
    changeHandler(event){
        this.amt = event.detail.value;
        this.formattedNumber = new Intl.NumberFormat(LOCALE, {
            style: 'currency',
            currency: CURRENCY,
            currencyDisplay: 'symbol'
        }).format(this.amt);
    }
}