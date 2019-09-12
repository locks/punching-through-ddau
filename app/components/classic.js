import Component from '@ember/component';
import { action } from '@ember/object';

export default Component.extend({
    updateValue: action(function ({ target: { value }}) {
        this.set('dataDown', value);
    })
});
