const findByKey = (array, cur, key) => array.find((a) => a[key] === cur[key]);

function getPageData(dayTrade, pageSize, pageNumber) {
  const firstItem = pageSize * pageNumber - pageSize;
  const lastItem = pageSize * pageNumber - 1;
  // const uniquePeople = [...new Set(dayTrade.map(item => item.user))];
  console.log(dayTrade)
  console.log(firstItem, lastItem);
  
  const uniquePeople = dayTrade.reduce((acc, cur) => {
    const found = findByKey(acc, cur, "user");
    found
      ? (found.countOfStocks = found.countOfStocks + cur.countOfStocks)
      : acc.push(cur);
    return acc;
  }, []);

  console.log(uniquePeople)

  const groupByUser = dayTrade.reduce(function (r, a) {
    r[a.user] = r[a.user] || [];
    r[a.user].push(a);
    return r;
  }, {});


  const paginated = uniquePeople.filter(
    (up, i) => i >= firstItem && i <= lastItem
  );

  const sorted = paginated.sort((a, b) => b.countOfStocks - a.countOfStocks);
  return sorted;
}

var dayTrade = [
  { id: 10, user: "Bill", company: "Goldman", countOfStocks: 512 },
  { id: 1, user: "Rob", company: "Google", countOfStocks: 1 },
  { id: 2, user: "Bill", company: "Goldman", countOfStocks: 2 },
  { id: 3, user: "John", company: "JPMorgan", countOfStocks: 4 },
  { id: 4, user: "Ruy", company: "Google", countOfStocks: 8 },
  { id: 5, user: "Dina", company: "Goldman", countOfStocks: 16 },
  { id: 7, user: "Marilin", company: "Google", countOfStocks: 64 },
  { id: 8, user: "Bill", company: "Goldman", countOfStocks: 128 },
  { id: 6, user: "Felipe", company: "JPMorgan", countOfStocks: 32 },
  { id: 9, user: "Rob", company: "JPMorgan", countOfStocks: 256 },
  { id: 11, user: "Rob", company: "JPMorgan", countOfStocks: 1024 },
];



function Sellers() {
  const felipe = getPageData(dayTrade, 3, 1);
  console.log(felipe)
  return <div>{JSON.stringify(felipe)}</div>
}

export default Sellers