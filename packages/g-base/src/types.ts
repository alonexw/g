
export type BBox = {
  minX: number,
  minY: number,
  maxX: number,
  maxY: number,
};

type ColorType = string | null;

export type ShapeAttrs = {
  x?: number,
  y?: number,
  stroke?: ColorType,
  fill?: ColorType,
  lineWidth?: number,
};

type ElementCfg = {
  /**
   * 元素 id,可以为空
   * @type {String}
   */
  id?: string,
  /**
   * 层次索引，决定绘制的先后顺序
   * @type {Number}
   */
  zIndex?: number,
  /**
   * 是否可见
   * @type {Boolean}
   */
  visible?: boolean,
  /**
   * 是否可以拾取
   * @type {Boolean}
   */
  capture?: boolean,
};

export type ShapeCfg = ElementCfg & {
  /**
   * 图形的属性
   * @type {ShapeAttrs}
   */
  attrs: ShapeAttrs,
  [key: string]: any,
};

export type GroupCfg = {
  [key: string]: any,
};

export type CanvasCfg = {
  /**
   * 容器编号
   * @type {string}
   */
  containerId: string,
  /**
   * 画布宽度
   * @type {number}
   */
  width: number,
  /**
   * 画布高度
   * @type {number}
   */
  height: number,
  /**
   * 是否可监听
   * @type {boolean}
   */
  capture?: boolean,
  [key: string]: any,
};
