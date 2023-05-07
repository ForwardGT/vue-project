import TestComponent1 from "../components/TestComponent1.vue"
import TestComponent2 from "../components/TestComponent2.vue"
import Navbar from "../components/Navbar.vue"

export default [
  {
    name: "testcom1",
    path: "/testcom1",
    component: TestComponent1,
  },
  {
    name: "testcom2",
    path: "/testcom2",
    component: TestComponent2,
  },
  {
    name: "navbar",
    path: "/",
    component: Navbar,
  },
]
