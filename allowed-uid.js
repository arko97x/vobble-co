// import { useRouter } from "next/router"

// function AllowedUIDs() {
//   const allowedUID = ["kid1", "kid2", "kid3", "kid4", "kid5", "kid6", "kid7", "kid8", "kid9", "kid10", "kid11", "kid12", "kid13", "kid14", "kid15", "kid16", "kid17", "kid18", "kid19", "kid20"]
//   const router = useRouter()
//   const uid = router.query.uid
//   var allow = false

//   if (allowedUID.includes(uid)) {
//     allow = true
//   } else {
//     allow = false
//   }


//   return (
//     (allowedUID.includes(uid) ? true : false)
//   )
// }

// export default AllowedUIDs

import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Papa from "papaparse"

export default function AllowedUIDs() {
  const [data, setData] = useState({});
  var allow = false
  const router = useRouter()
  const uid = router.query.uid
  useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTjT5jxLJSHVmEfQsBZVZcPNAYJLpiCP6-xKlrqrkTrovY5mtsE9ErWf8ygRYSfCyvzWcik8h2lwVIN/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, [])

  for (var i = 0; i < data.length; i++) {
    if (data[i].pilot1users == uid) {
      allow = true
      break
    }
  }

  return (
    allow
  )
}
// export default AllowedUIDs