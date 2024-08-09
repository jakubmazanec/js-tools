import {type Simplify} from '@jakubmazanec/ts-utils';

import {type useButtonTheme} from '../components/Button.js';
import {type useCardTheme} from '../components/Card.js';
import {type useCheckboxTheme} from '../components/Checkbox.js';
import {type useCheckboxFieldTheme} from '../components/CheckboxField.js';
import {type useComboboxTheme} from '../components/Combobox.js';
import {type useComboboxOptionTheme} from '../components/ComboboxOption.js';
import {type useDialogTheme} from '../components/Dialog.js';
import {type useDialogPanelTheme} from '../components/DialogPanel.js';
import {type useDialogTitleTheme} from '../components/DialogTitle.js';
import {type useErrorTheme} from '../components/Error.js';
import {type useFieldTheme} from '../components/Field.js';
import {type useFieldsetTheme} from '../components/Fieldset.js';
import {type useFormTheme} from '../components/Form.js';
import {type useIconTheme} from '../components/Icon.js';
import {type useInputTheme} from '../components/Input.js';
import {type useLabelTheme} from '../components/Label.js';
import {type useLegendTheme} from '../components/Legend.js';
import {type useListboxTheme} from '../components/Listbox.js';
import {type useListboxOptionTheme} from '../components/ListboxOption.js';
import {type useMenuTheme} from '../components/Menu.js';
import {type useMenuButtonTheme} from '../components/MenuButton.js';
import {type useMenuItemTheme} from '../components/MenuItem.js';
import {type useMenuItemsTheme} from '../components/MenuItems.js';
import {type usePopoverTheme} from '../components/Popover.js';
import {type usePopoverButtonTheme} from '../components/PopoverButton.js';
import {type usePopoverPanelTheme} from '../components/PopoverPanel.js';
import {type useRadioTheme} from '../components/Radio.js';
import {type useRadioFieldTheme} from '../components/RadioField.js';
import {type useRadioGroupTheme} from '../components/RadioGroup.js';
import {type useSpinnerTheme} from '../components/Spinner.js';
import {type useTableTheme} from '../components/Table.js';
import {type useTableCellTheme} from '../components/TableCell.js';
import {type useTableHeaderTheme} from '../components/TableHeader.js';
import {type useTableHeaderCellTheme} from '../components/TableHeaderCell.js';
import {type useTableRowTheme} from '../components/TableRow.js';
import {type useTextareaTheme} from '../components/Textarea.js';
import {type ComponentTheme, type ComponentThemeDefinition} from './internals.js';

type ThemeHelper<
  U extends {themeDefinition: ComponentThemeDefinition | undefined; componentThemeName: string},
> = {
  [K in U['componentThemeName']]: ComponentTheme<U['themeDefinition']>;
};

export type Theme = Simplify<
  ThemeHelper<typeof useButtonTheme> &
    ThemeHelper<typeof useCardTheme> &
    ThemeHelper<typeof useCheckboxFieldTheme> &
    ThemeHelper<typeof useCheckboxTheme> &
    ThemeHelper<typeof useComboboxOptionTheme> &
    ThemeHelper<typeof useComboboxTheme> &
    ThemeHelper<typeof useDialogPanelTheme> &
    ThemeHelper<typeof useDialogTheme> &
    ThemeHelper<typeof useDialogTitleTheme> &
    ThemeHelper<typeof useErrorTheme> &
    ThemeHelper<typeof useFieldsetTheme> &
    ThemeHelper<typeof useFieldTheme> &
    ThemeHelper<typeof useFormTheme> &
    ThemeHelper<typeof useIconTheme> &
    ThemeHelper<typeof useInputTheme> &
    ThemeHelper<typeof useLabelTheme> &
    ThemeHelper<typeof useLegendTheme> &
    ThemeHelper<typeof useListboxOptionTheme> &
    ThemeHelper<typeof useListboxTheme> &
    ThemeHelper<typeof useMenuButtonTheme> &
    ThemeHelper<typeof useMenuItemsTheme> &
    ThemeHelper<typeof useMenuItemTheme> &
    ThemeHelper<typeof useMenuTheme> &
    ThemeHelper<typeof usePopoverButtonTheme> &
    ThemeHelper<typeof usePopoverPanelTheme> &
    ThemeHelper<typeof usePopoverTheme> &
    ThemeHelper<typeof useRadioFieldTheme> &
    ThemeHelper<typeof useRadioGroupTheme> &
    ThemeHelper<typeof useRadioTheme> &
    ThemeHelper<typeof useSpinnerTheme> &
    ThemeHelper<typeof useTableCellTheme> &
    ThemeHelper<typeof useTableHeaderCellTheme> &
    ThemeHelper<typeof useTableHeaderTheme> &
    ThemeHelper<typeof useTableRowTheme> &
    ThemeHelper<typeof useTableTheme> &
    ThemeHelper<typeof useTextareaTheme>
>;
