/**
 * Created by huangchao on 2017/6/27.
 */
export const SEARCH_SEARCH = 'SEARCH_SEARCH' // 搜索

export const Search = ({
  city_id,
  keyword,
}) => ({
  type: SEARCH_SEARCH,
  args: {
    city_id,
    keyword,
  },
})
