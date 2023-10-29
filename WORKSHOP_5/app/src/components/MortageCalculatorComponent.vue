<template>
    <div>
        <form>
            <input v-model="credit" type="number" placeholder="Сумма кредита">
            <input v-model="percent" type="number" placeholder="Процентная ставка">
            <input v-model="period" type="number" placeholder="Срок кредита">
        </form>

        <!-- возвращаемые значения - через точку -->
        <h2>Ежемесячный платеж - {{ payment.payByMonth }}</h2>
        <h2>Общая сумма кредита - {{ payment.total }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            credit: null,
            percent: null,
            period: null,
        }
    },
    // вычисления происходят "на лету"
    computed: {
        payment() {
            const principal = parseFloat(this.credit);
            const interestRate = parseFloat(this.percent) / 100 / 12;
            const loanTermMonths = parseFloat(this.period) * 12;

            const numerator = principal * interestRate * Math.pow(1 + interestRate, loanTermMonths);
            const denominator = Math.pow(1 + interestRate, loanTermMonths) - 1;
            const payByMonth = (numerator / denominator).toFixed(2);
            const total = (payByMonth * 12 * this.period).toFixed(2);
            // внутри computed-методов всегда д.б. заключен return!!
            return { payByMonth, total };
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
