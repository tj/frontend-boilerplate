// flow-typed signature: f04fb4af0986c3092bfebba84ce84742
// flow-typed version: da30fe6876/react-helmet_v3.x.x/flow_>=v0.26.x <=v0.52.x

declare module 'react-helmet' {
  declare type Props = {
    htmlAttributes?: Object,
    title?: string,
    defaultTitle?: string,
    titleTemplate?: string,
    base?: Object,
    meta?: Array<Object>,
    link?: Array<Object>,
    script?: Array<Object>,
    noscript?: Array<Object>,
    style?: Array<Object>,
    onChangeClientState?: (newState: Object, addedTags: Object, removeTags: Object) => void | mixed,
  }
  declare interface HeadAttribute {
    toString(): string;
    toComponent(): React$Element<*>;
  }
  declare interface Head {
    htmlAttributes: HeadAttribute;
    title: HeadAttribute;
    base: HeadAttribute;
    meta: HeadAttribute;
    link: HeadAttribute;
    script: HeadAttribute;
    style: HeadAttribute;
  }

  declare class Helmet extends React$Component<Props> {
    static rewind(): Head;
    // props: Props;
  }

  declare module.exports: typeof Helmet
}
