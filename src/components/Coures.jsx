// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Flex,
//   IconButton,
//   Select,
//   Input,
//   Button,
//   Text,
//   SimpleGrid,
//   GridItem,
//   Heading,
//   Checkbox,
//   Radio,
//   Stack,
// } from "@chakra-ui/react";
// import { FaThLarge, FaListUl, FaSearch } from "react-icons/fa";
// import free from "../assets/coures/free.jpg";
// import paid from "../assets/coures/paid.png";
// import logo from "../assets/logo/favi.png";

// const courses = [
//   {
//     id: 1,
//     title: "Basic Futures & Options",
//     description: "This course will be available very soon.",
//     author: "Train2Trade",
//     authorImage: logo,
//     image: free,
//     students: 0,
//     price: "Free",
//     link: "https://online.train2trade.co.in/courses/basic-futures-options/",
//     category: "technical-analysis",
//   },
//   {
//     id: 2,
//     title: "Basic Technical Analysis",
//     description: "This course will be helpful for beginners...",
//     author: "Train2Trade",
//     authorImage: logo,
//     image: paid,
//     students: 16,
//     price: "₹2,500.00",
//     link: "https://online.train2trade.co.in/courses/basic-technical-analysis/",
//     category: "technical-analysis",
//   },
// ];

// export const CourseComponent = ({ filteredCourses, view }) => {
//   return (
//     <Box>
    
//       <Box>
//         {view === "grid" ? (
//           <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
//             {filteredCourses.map((course) => (
//               <GridItem
//                 key={course.id}
//                 p={5}
//                 borderWidth={1}
//                 borderRadius="md"
//                 boxShadow="md"
//               >
//                 <Box>
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     style={{
//                       width: "100%",
//                       height: "200px",
//                       objectFit: "cover",
//                       borderRadius: "8px",
//                     }}
//                   />

//                   <Text fontWeight="bold" mt={2}>
//                     {course.title}
//                   </Text>
//                   <Text>{course.description}</Text>
//                   <Flex align="center" justify="space-between" mt={2}>
//                     <Flex align="center">
//                       <img
//                         src={course.authorImage}
//                         alt={course.author}
//                         style={{ width: "30px", borderRadius: "50%" }}
//                       />
//                       <Text ml={2}>{course.author}</Text>
//                     </Flex>
//                     <Text>{course.price}</Text>
//                   </Flex>
//                   <Text mt={2} fontSize="sm">
//                     {course.students} students
//                   </Text>
//                   <Button
//                     as="a"
//                     href={course.link}
//                     bg={"yellow.500"}
//                     color={"blackAlpha.700"}
//                     mt={2}
//                     width="100%"
//                   >
//                     Read More
//                   </Button>
//                 </Box>
//               </GridItem>
//             ))}
//           </SimpleGrid>
//         ) : (
//           <Box>
//             {filteredCourses.map((course) => (
//               <Box
//                 key={course.id}
//                 p={5}
//                 borderWidth={1}
//                 borderRadius="md"
//                 boxShadow="md"
//                 mb={4}
//               >
//                 <Flex direction={{ base: "column", md: "row" }}>
//                   <Box width="100%" height="200px" borderRadius="8px">
//                     <img
//                       src={course.image}
//                       alt={course.title}
//                       style={{
//                         width: "100%",
//                         height: "200px",

//                         borderRadius: "8px",
//                       }}
//                     />
//                   </Box>
//                   <Box
//                     width={{ base: "100%", md: "70%" }}
//                     ml={{ md: 4 }}
//                     mt={{ base: 4, md: 0 }}
//                   >
//                     <Text fontWeight="bold" fontSize="xl">
//                       {course.title}
//                     </Text>
//                     <Text>{course.description}</Text>
//                     <Flex align="center" justify="space-between" mt={2}>
//                       <Flex align="center">
//                         <img
//                           src={course.authorImage}
//                           alt={course.author}
//                           style={{ width: "30px", borderRadius: "50%" }}
//                         />
//                         <Text ml={2}>{course.author}</Text>
//                       </Flex>
//                       <Text>{course.price}</Text>
//                     </Flex>
//                     <Text mt={2} fontSize="sm">
//                       {course.students} students
//                     </Text>
//                     <Button
//                       as="a"
//                       href={course.link}
//                       target="_blank"
//                       bg="yellow.500"
//                       color={"black.700"}
//                       mt={2}
//                       width="100%"
//                     >
//                       Read More
//                     </Button>
//                   </Box>
//                 </Flex>
//               </Box>
//             ))}
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// const Sidebar = ({ filters, setFilters }) => {
//   const handleCheckboxChange = (e) => {
//     const { name, value, checked } = e.target;
//     setFilters((prevState) => ({
//       ...prevState,
//       [name]: checked ? value : "",
//     }));
//   };

//   const handleRadioChange = (e) => {
//     const { value } = e.target;
//     setFilters((prevState) => ({
//       ...prevState,
//       price: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <Box as="aside" position="sticky" top="20px" width="300px">
//       <Box p="4" bg="white" boxShadow="md">
//         <Heading size="md" mb="4">
//           Course Categories
//         </Heading>
//         <Stack spacing={2}>
//           <Checkbox
//             name="courseCategory"
//             value="technical-analysis"
//             onChange={handleCheckboxChange}
//             colorScheme="blue"
//           >
//             Technical Analysis
//           </Checkbox>
//         </Stack>
//         <Heading size="md" mt={4} mb="4">
//           Instructor
//         </Heading>
//         <Stack spacing={2}>
//           <Checkbox value="train2trade" colorScheme="blue">
//             Train2Trade
//           </Checkbox>
//         </Stack>

//         <Heading size="md" mt="6" mb="4">
//           Price
//         </Heading>
//         <Stack spacing={2}>
//           <Radio
//             name="price"
//             value="all"
//             onChange={handleRadioChange}
//             isChecked={filters.price === "all"}
//           >
//             All
//           </Radio>
//           <Radio
//             name="price"
//             value="free"
//             onChange={handleRadioChange}
//             isChecked={filters.price === "free"}
//           >
//             Free
//           </Radio>
//           <Radio
//             name="price"
//             value="paid"
//             onChange={handleRadioChange}
//             isChecked={filters.price === "paid"}
//           >
//             Paid
//           </Radio>
//         </Stack>

//         <Button
//           onClick={handleSubmit}
//           bg={"yellow.500"}
//           color={"blackAlpha.700"}
//           mt="4"
//           width="full"
//         >
//           Apply Filters
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// const TopBar = ({ handleLayoutSwitch, setFilters }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setFilters((prevState) => ({
//       ...prevState,
//       search: e.target.value,
//     }));
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleSortChange = (e) => {
//     setFilters((prevState) => ({
//       ...prevState,
//       sortBy: e.target.value,
//     }));
//   };

//   return (
//     <Flex justify="flex-start" bg={"#f5f5f5"} gap={10} p="4" boxShadow="md">
//       <Box>
//         <IconButton
//           icon={<FaThLarge />}
//           aria-label="Grid View"
//           onClick={() => handleLayoutSwitch("grid")}
//           variant="outline"
//           mr="2"
//         />
//         <IconButton
//           icon={<FaListUl />}
//           aria-label="List View"
//           onClick={() => handleLayoutSwitch("list")}
//           variant="outline"
//         />
//       </Box>

//       <Box as="form" onSubmit={handleSearchSubmit}>
//         <Flex>
//           <Input
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search Courses..."
//             size="md"
//             mr="2"
//           />
//           <IconButton
//             icon={<FaSearch />}
//             aria-label="Search Courses"
//             type="submit"
//             colorScheme="blue"
//           />
//         </Flex>
//       </Box>

//       <Select onChange={handleSortChange} width="200px">
//         <option value="newly-published">Newly Published</option>
//         <option value="alphabetically">Alphabetically</option>
//         <option value="most-students">Most Students</option>
//       </Select>
//     </Flex>
//   );
// };

// const Coures = () => {
//   const [filters, setFilters] = useState({
//     courseCategory: "technical-analysis",
//     search: "",
//     sortBy: "newly-published",
//     price: "all",
//   });
//   const [view, setView] = useState("grid");

//   const handleLayoutSwitch = (view) => {
//     setView(view);
//   };

//   const filteredCourses = courses.filter((course) => {
//     const matchesCategory = course.category === filters.courseCategory;
//     const matchesSearch =
//       course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//       course.description.toLowerCase().includes(filters.search.toLowerCase());
//     const matchesPrice =
//       filters.price === "all" ||
//       (filters.price === "free" && course.price === "Free") ||
//       (filters.price === "paid" && course.price !== "Free");

//     return matchesCategory && matchesSearch && matchesPrice;
//   });

//   if (filters.sortBy === "alphabetically") {
//     filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
//   } else if (filters.sortBy === "most-students") {
//     filteredCourses.sort((a, b) => b.students - a.students);
//   }

//   return (
//     <Flex
//       direction="column"
//       px={{ base: 4, md: 8, lg: 24 }}
//       py={{ base: 2, md: 3 }}
//     >
//       <TopBar handleLayoutSwitch={handleLayoutSwitch} setFilters={setFilters} />
//       <Flex>
//         <Box flex="1" p="4">
//           <CourseComponent filteredCourses={filteredCourses} view={view} />
//         </Box>
//         <Box mt={8} p="4">
//           <Sidebar filters={filters} setFilters={setFilters} />
//         </Box>
//       </Flex>
//     </Flex>
//   );
// };

// export default Coures; 


import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Select,
  Input,
  Button,
  Text,
  SimpleGrid,
  GridItem,
  Heading,
  Checkbox,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { FaThLarge, FaListUl, FaSearch } from "react-icons/fa";
import free from "../assets/coures/free.jpg";
import paid from "../assets/coures/paid.png";
import logo from "../assets/logo/favi.png";

const courses = [
  {
    id: 1,
    title: "Basic Futures & Options",
    description: "This course will be available very soon.",
    author: "Train2Trade",
    authorImage: logo,
    image: free,
    students: 0,
    price: "Free",
    link: "https://online.train2trade.co.in/courses/basic-futures-options/",
    category: "technical-analysis",
  },
  {
    id: 2,
    title: "Basic Technical Analysis",
    description: "This course will be helpful for beginners...",
    author: "Train2Trade",
    authorImage: logo,
    image: paid,
    students: 16,
    price: "₹2,500.00",
    link: "https://online.train2trade.co.in/courses/basic-technical-analysis/",
    category: "technical-analysis",
  },
];

export const CourseComponent = ({ filteredCourses, view }) => {
  return (
    <Box>
      <Box>
        {view === "grid" ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
            {filteredCourses.map((course) => (
              <GridItem
                key={course.id}
                p={5}
                borderWidth={1}
                borderRadius="md"
                boxShadow="md"
              >
                <Box>
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <Text fontWeight="bold" mt={2}>
                    {course.title}
                  </Text>
                  <Text>{course.description}</Text>
                  <Flex align="center" justify="space-between" mt={2}>
                    <Flex align="center">
                      <img
                        src={course.authorImage}
                        alt={course.author}
                        style={{ width: "30px", borderRadius: "50%" }}
                      />
                      <Text ml={2}>{course.author}</Text>
                    </Flex>
                    <Text>{course.price}</Text>
                  </Flex>
                  <Text mt={2} fontSize="sm">
                    {course.students} students
                  </Text>
                  <Button
                    as="a"
                    href={course.link}
                    bg={"yellow.500"}
                    color={"blackAlpha.700"}
                    mt={2}
                    width="100%"
                  >
                    Read More
                  </Button>
                </Box>
              </GridItem>
            ))}
          </SimpleGrid>
        ) : (
          <Box>
            {filteredCourses.map((course) => (
              <Box
                key={course.id}
                p={5}
                borderWidth={1}
                borderRadius="md"
                boxShadow="md"
                mb={4}
              >
                <Flex direction={{ base: "column", md: "row" }}>
                  <Box width="100%" height="200px" borderRadius="8px">
                    <img
                      src={course.image}
                      alt={course.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                  <Box
                    width={{ base: "100%", md: "70%" }}
                    ml={{ md: 4 }}
                    mt={{ base: 4, md: 0 }}
                  >
                    <Text fontWeight="bold" fontSize="xl">
                      {course.title}
                    </Text>
                    <Text>{course.description}</Text>
                    <Flex align="center" justify="space-between" mt={2}>
                      <Flex align="center">
                        <img
                          src={course.authorImage}
                          alt={course.author}
                          style={{ width: "30px", borderRadius: "50%" }}
                        />
                        <Text ml={2}>{course.author}</Text>
                      </Flex>
                      <Text>{course.price}</Text>
                    </Flex>
                    <Text mt={2} fontSize="sm">
                      {course.students} students
                    </Text>
                    <Button
                      as="a"
                      href={course.link}
                      target="_blank"
                      bg="yellow.500"
                      color={"black.700"}
                      mt={2}
                      width="100%"
                    >
                      Read More
                    </Button>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

const Sidebar = ({ filters, setFilters }) => {
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: checked ? value : "",
    }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      price: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      as="aside"
      position="sticky"
      top="20px"
      width={{ base: "100%", sm: "300px" }}
      mb={{ base: 6, md: 0 }}
    >
      <Box p="4" bg="white" boxShadow="md">
        <Heading size="md" mb="4">
          Course Categories
        </Heading>
        <Stack spacing={2}>
          <Checkbox
            name="courseCategory"
            value="technical-analysis"
            onChange={handleCheckboxChange}
            colorScheme="blue"
          >
            Technical Analysis
          </Checkbox>
        </Stack>
        <Heading size="md" mt={4} mb="4">
          Instructor
        </Heading>
        <Stack spacing={2}>
          <Checkbox value="train2trade" colorScheme="blue">
            Train2Trade
          </Checkbox>
        </Stack>

        <Heading size="md" mt="6" mb="4">
          Price
        </Heading>
        <Stack spacing={2}>
          <Radio
            name="price"
            value="all"
            onChange={handleRadioChange}
            isChecked={filters.price === "all"}
          >
            All
          </Radio>
          <Radio
            name="price"
            value="free"
            onChange={handleRadioChange}
            isChecked={filters.price === "free"}
          >
            Free
          </Radio>
          <Radio
            name="price"
            value="paid"
            onChange={handleRadioChange}
            isChecked={filters.price === "paid"}
          >
            Paid
          </Radio>
        </Stack>

        <Button
          onClick={handleSubmit}
          bg={"yellow.500"}
          color={"blackAlpha.700"}
          mt="4"
          width="full"
        >
          Apply Filters
        </Button>
      </Box>
    </Box>
  );
};

const TopBar = ({ handleLayoutSwitch, setFilters }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setFilters((prevState) => ({
      ...prevState,
      search: e.target.value,
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleSortChange = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      sortBy: e.target.value,
    }));
  };

  return (
    <Flex
      justify="flex-start"
      bg={"#f5f5f5"}
      gap={6}
      p="4"
      boxShadow="md"
      direction={{ base: "column", sm: "row" }}
    >
      <Box mb={{ base: 4, sm: 0 }}>
        <IconButton
          icon={<FaThLarge />}
          aria-label="Grid View"
          onClick={() => handleLayoutSwitch("grid")}
          variant="outline"
          mr="2"
        />
        <IconButton
          icon={<FaListUl />}
          aria-label="List View"
          onClick={() => handleLayoutSwitch("list")}
          variant="outline"
        />
      </Box>

      <Box as="form" onSubmit={handleSearchSubmit} width={{ base: "100%", sm: "auto" }}>
        <Flex>
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Courses..."
            size="md"
            mr="2"
          />
          <IconButton icon={<FaSearch />} aria-label="Search" type="submit" />
        </Flex>
      </Box>

      <Box>
        <Select
          placeholder="Sort By"
          onChange={handleSortChange}
          bg="white"
          size="md"
        >
          <option value="newly-published">Newly Published</option>
        <option value="alphabetically">Alphabetically</option>
         <option value="most-students">Most Students</option>
        </Select>
      </Box>
    </Flex>
  );
};

const Course = () => {
  const [view, setView] = useState("grid");
  const [filters, setFilters] = useState({
         courseCategory: "technical-analysis",
         search: "",
         sortBy: "newly-published",
         price: "all",
       });

 

  

  const filteredCourses = courses.filter((course) => {
        const matchesCategory = course.category === filters.courseCategory;
        const matchesSearch =
          course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          course.description.toLowerCase().includes(filters.search.toLowerCase());
        const matchesPrice =
          filters.price === "all" ||
          (filters.price === "free" && course.price === "Free") ||
          (filters.price === "paid" && course.price !== "Free");
    
        return matchesCategory && matchesSearch && matchesPrice;
      });
    
      if (filters.sortBy === "alphabetically") {
        filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
      } else if (filters.sortBy === "most-students") {
        filteredCourses.sort((a, b) => b.students - a.students);
      }

  return (
    <Box p={{ base: "4", md: "6" }}>
      <TopBar handleLayoutSwitch={setView} setFilters={setFilters} />
      <Flex
        justify={{ base: "center", sm: "space-between" }}
        gap="6"
        mt={{ base: "4", md: "6" }}
        direction={{ base: "column", sm: "row" }}
      >
        <CourseComponent filteredCourses={filteredCourses} view={view} />
        <Sidebar filters={filters} setFilters={setFilters} />
      </Flex>
    </Box>
  );
};

export default Course;



