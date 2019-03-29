<template>
<v-flex grow="false">
<v-layout
		row
		align-center
	>
		<v-menu
			:disabled="disabled"
			:close-on-content-click="false"
			v-model="showDatePicker"
			:nudge-right="40"
			transition="scale-transition"
			offset-y
			lazy
		>
			<v-text-field
				ref="textInput"
				slot="activator"
				:value="DateDisplay"
				:label="label"
				:placeholder="placeholder"
				:hint="hint"
				:persistent-hint="persistentHint"
				:append-icon="showDatePicker ? 'arrow_drop_up' : 'arrow_drop_down'"
				:prepend-icon="prependIcon"
				readonly
				:rules="rules"
				class="input-field"
			></v-text-field>
			<v-date-picker
				v-model="ComputedValue"
				:type="type"
				:min="MinDate"
				:max="MaxDate"
				no-title
			></v-date-picker>
		</v-menu>
		<v-btn
			:disabled="disabled"
			@click="ClearDate"
			icon
			v-if="clearable && DateDisplay"
			class="ma-0 mb-1"
		>
			<v-icon color="grey darken-1">close</v-icon>
		</v-btn>
	</v-layout>
</v-flex>
</template>

<script lang="ts" src="./DatePicker.ts"></script>
<style lang="scss" src="./DatePicker.scss" scoped></style>
