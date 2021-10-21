export const formatValidationError = (err: Array<{}>) => {
  let errorObj: { [key: string]: any } = {};

  err.length !== 0
    ? err.map((item: { [key: string]: any }) => {
        if (item.context?.key) {
          errorObj[item.context.key] = item.message;
        }
      })
    : {};

  return errorObj;
};

// FILTER ARGS FOR TYPEORM FILTER
export const filterQueryArgs = (args: { [key: string]: any }) => {
  let where = {};
  let order = {};
  let take = 0;
  let skip = 0;

  if (args.limit) {
    take = args.limit;
  }

  if (args.offset) {
    skip = args.offset;
  }

  if (args.order) {
    const keyArray = Object.keys(args.order);
    keyArray.length !== 0 &&
      keyArray.map((item: any) => {
        if (args.order[item] === "ASC" || args.order[item] === "DESC") {
          order = { ...order, [item]: args.order[item] };
        }
      });
  }

  if (args.filter) {
    const keyArray = Object.keys(args.filter);
    keyArray.length !== 0 &&
      keyArray.map((item: any) => {
        where = { ...where, [item]: args.filter[item] };
      });
  }

  return { where, order, take, skip };
};
