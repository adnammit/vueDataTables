import { Vue, Component, Prop } from 'vue-property-decorator';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

@Component
export default class DatePicker extends Vue {
    @Prop({	default: null })
    public value: Date;

    @Prop({ default: 'Date' })
    public label: string;

    @Prop({ default: 'Select Date'})
    public placeholder: string;

    @Prop({ default: 'calendar_today' })
    public prependIcon: string;

    @Prop()
    public hint: string;

    @Prop({ default: false })
    public persistentHint: boolean;

    @Prop({ default: 'date' })
    public type: 'date' | 'month';

    @Prop({ default: 'first' })
    public defaultMonthDay: 'first' | 'last';

    @Prop({ default: undefined })
    public minDate: Date;

    @Prop({ default: undefined })
    public maxDate: Date;

    @Prop({ default: () => [() => true] })
    public rules: Array<() => boolean|string>;

    @Prop({ default: false })
    public disabled: boolean;

    @Prop({ default: true })
    public clearable: boolean;

    public showDatePicker: boolean;

    constructor() {
        super();
        this.showDatePicker = false;
    }

    public get ComputedValue() {
        if (this.value) {
            return this.value.toISOString().substr(0, 10);
        }
        return '';
    }

    public set ComputedValue(e: string) {
        const splitsDate = e.split('-');

        if (this.type === 'month') {
            const dayString = `${this.GetDefaultMonthDay(parseInt(splitsDate[1], 10), this.defaultMonthDay)}`;
            splitsDate.push(dayString);
            e += `-${dayString}`;
        }

        let newDate: Date = null;
        try {
            newDate = new Date(splitsDate[1] + '-' + splitsDate[2] + '-' + splitsDate[0]);
        } catch (error) {
            newDate = new Date(e);
        }

        this.$emit('input', newDate);
        this.$emit('change', newDate);
        this.showDatePicker = false;
    }

    /** month: 1-12, day: 'first' or 'last', returns 01, 28, 29, 31 */
    private GetDefaultMonthDay(month: number, day: 'first' | 'last'): string {
        if (day === 'first') {
            return '01';
        }
        const thirtyOneMonths = [1, 3, 5, 7, 8, 10, 12];
        const thirtyMonths = [9, 4, 6, 11];
        const febMonth = 2;

        if (thirtyOneMonths.includes(month)) {
            return '31';
        }
        if (thirtyMonths.includes(month)) {
            return '30';
        }
        if (febMonth === month) {
            const isLeap = new Date(new Date().getFullYear(), 1, 29).getMonth() === 1;
            return isLeap ? '29' : '28';
        }
        return '31';
    }

    private ClearDate() {
        this.$emit('input', null);
        this.$emit('change', null);
    }

    public get MinDate() {
        if (!this.minDate) {
            return this.minDate;
        }
        return this.minDate.toISOString().substr(0, 10);
    }

    public get MaxDate() {
        if (!this.maxDate) {
            return this.maxDate;
        }
        return this.maxDate.toISOString().substr(0, 10);
    }

    public get DateDisplay() {
        if (!this.value) {
            return '';
        }
        const date = this.value;
        if (this.type === 'month') {
            return  `${date.getMonth() + 1}/${date.getFullYear()}`;
        }
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }

    public ClearValidation() {
        const input = (this.$refs.textInput as any);
        input.errorBucket = [];
    }
}
