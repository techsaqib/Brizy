import React from "react";
import EditorComponent from "visual/editorComponents/EditorComponent";
import { WPShortcode } from "../common/WPShortcode";
import Toolbar from "visual/component-new/Toolbar";
import * as toolbarConfig from "./toolbar";
import defaultValue from "./defaultValue.json";
import { styleClassName, styleCSSVars } from "./styles";

const resizerPoints = ["centerLeft", "centerRight"];

class WOOProductPage extends EditorComponent {
  static get componentId() {
    return "WOOProductPage";
  }

  static defaultValue = defaultValue;

  handleResizerChange = patch => this.patchValue(patch);

  renderForEdit(v) {
    const attributes = {
      id: v.productID
    };

    return (
      <Toolbar {...this.makeToolbarPropsFromConfig(toolbarConfig)}>
        <WPShortcode
          name="product_page"
          attributes={attributes}
          placeholderIcon="nc-woo-2"
          className={styleClassName(v)}
          style={styleCSSVars(v)}
          resizerPoints={resizerPoints}
          resizerMeta={this.props.meta}
          resizerValue={v}
          resizerOnChange={this.handleResizerChange}
        />
      </Toolbar>
    );
  }
}

export default WOOProductPage;
