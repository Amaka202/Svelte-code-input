/// <reference types="svelte" />
import type { SvelteComponent } from "svelte";

export interface CodeInputProps {
     /**
     * @default 4
     */
  size: number; // The size of the input fields

   /**
     * @default 'text'
     */

  inputType?: 'text' | 'number' | 'mixed'; // The type of input ('text', 'number', or 'mixed')

   /**
     * @default undefined
     */

  containerstyle?: string; // Optional CSS styles for the container

   /**
     * @default undefined
     */

  inputStyle?: string; // Optional CSS styles for the input elements

   /**
     * @default undefined
     */

  pattern?: RegExp; // Optional pattern for input validation

   /**
     * @default false
     */
  isInputHidden?: boolean; // Whether the input is hidden (default: true)

   /**
     * @default false
     */

  disabled?: boolean; // Whether the input is disabled (default: false)

}

export default class CodeInput extends SvelteComponent<
  CodeInputProps,
  { updateValue: CustomEvent<{ value: string }> }, // Define the updateValue event
  {}
> {}