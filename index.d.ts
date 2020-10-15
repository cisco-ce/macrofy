interface BuildOpts {
  intput: string;
  output: string;
  minify: boolean;
}

declare function build(opts: BuildOpts): Promise<void>;
export default build;
