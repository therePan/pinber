export const FINDPAGE_CHANGE_CITY = 'FINDPAGE_CHANGE_CITY' // 当前城市
export const FINDPAGE_CHANGE_SALARY = 'FINDPAGE_CHANGE_SALARY' // 薪酬

/**
  city_id
  keyword
*/
export const changeCity = (args) => ({
  type: FINDPAGE_CHANGE_CITY,
  args,
})

/**
  城市 city
  区   area
*/
export const changeSalary = (args) => ({
  type: FINDPAGE_CHANGE_CITY,
  args,
})
