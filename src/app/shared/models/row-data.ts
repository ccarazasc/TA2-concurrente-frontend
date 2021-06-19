
export interface IRowData {
  id?: string;
  titular?: string;
  ruc?: string;
  titulo_proyecto?: string;
  unidad_proyecto?: string;
  tipo?: string;
  actividad?: string;
  fecha_inicio?: string;
  estado?: string;
  descripcion?: string;
  longitud?: string;
  latitud?: string;
  resolucion?: string;
  label?: string;
}

export class RowData implements IRowData {
  constructor(
  public id?: string,
  public titular?: string,
  public ruc?: string,
  public titulo_proyecto?: string,
  public unidad_proyecto?: string,
  public tipo?: string,
  public actividad?: string,
  public fecha_inicio?: string,
  public estado?: string,
  public descripcion?: string,
  public longitud?: string,
  public latitud?: string,
  public resolucion?: string,
  public label?: string,
  ) {}
}
