import { ValueUndefinedException } from "./exceptions/value-undefined-exception";

export class Page<TEntity> {
  public pageInfo: PageInfo | undefined;
  public edges: Edges<TEntity>[] | undefined;
  public nodes: TEntity[] | undefined;

  public getEdges(): TEntity[] {
    if (!this.edges) {
      throw new ValueUndefinedException("edges", "The edges were not defined, did you request them?");
    }

    const value: (TEntity | undefined)[] | undefined = this.edges
      ?.map((edge) => {
        return edge.node;
      });

    return (value?.filter(x => x !== undefined) ?? [
    ]) as TEntity[];
  }

  public getNodes(): TEntity[] {
    if (!this.edges) {
      throw new ValueUndefinedException("nodes", "The nodes were not defined, did you request them?");
    }

    const value: (TEntity | undefined)[] | undefined = this.edges
      ?.map((edge) => {
        return edge.node;
      });

    return (value?.filter(x => x !== undefined) ?? [
    ]) as TEntity[];
  }

  public getPageInfo(): PageInfo {
    if (!this.pageInfo) {
      throw new ValueUndefinedException("pageInfo", "The pageInfo was not defined, did you request it?");
    }
    return this.pageInfo;
  }

  public static fromData<TEntity>(data: Page<TEntity>): Page<TEntity> {
    return Object.assign(new Page<TEntity>(), data);
  }
}

export class PageInfo {
  public startCursor: string | undefined;
  public endCursor: string | undefined;
  public hasNextPage: boolean | undefined;
  public hasPreviousPage: boolean | undefined;
}

export class Edges<TEntity> {
  public node: TEntity | undefined;
  public cursor: string | undefined;
}

export class Pageable<TQueries> {
  public first: number | undefined;
  public last: number | undefined;
  public after: string | undefined;
  public before: string | undefined;
  constructor(public input: TQueries) {
  }

  public setFirst(first: number): Pageable<TQueries> {
    this.first = first;
    return this;
  }

  public setLast(last: number): Pageable<TQueries> {
    this.last = last;
    return this;
  }

  public setAfter(after: string): Pageable<TQueries> {
    this.after = after;
    return this;
  }

  public setBefore(before: string): Pageable<TQueries> {
    this.before = before;
    return this;
  }
}
