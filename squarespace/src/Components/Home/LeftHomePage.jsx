import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Intro from "./Sections/Intro";
import Product from "./Sections/Product";
import About from "./Sections/About";
import Footer from "./Sections/Footer";
import { setSectionSelected } from "../../Redux/Slices/workflowSlice";

const LeftHomePage = ({ sections }) => {
  const backgroundColor = useSelector((state) => state.web.backgroundColor);
  const dispatch = useDispatch();

  const isAnySectionVisible = Object.values(sections).some(
    (section) => section.show
  );

  useEffect(() => {
    dispatch(setSectionSelected(isAnySectionVisible));
  }, [sections, dispatch, isAnySectionVisible]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newSectionsOrder = Array.from(Object.keys(sections));
    const [movedSection] = newSectionsOrder.splice(result.source.index, 1);
    newSectionsOrder.splice(result.destination.index, 0, movedSection);
    console.log("New order:", newSectionsOrder);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {!isAnySectionVisible && (
        <>
          <h1 className="text-3xl font-bold mb-4">
            Add Sections to Build Your Homepage
          </h1>
          <p className="text-center text-gray-500">
            Your homepage will showcase what your site is about and what you
            offer.
          </p>
        </>
      )}

      <div
        className="overflow-y-auto h-[400px] w-full p-4"
        style={{ backgroundColor }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="sections">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {sections.intro && sections.intro.show && (
                  <Draggable key="intro" draggableId="intro" index={0}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Intro />
                      </div>
                    )}
                  </Draggable>
                )}
                {sections.product && sections.product.show && (
                  <Draggable key="product" draggableId="product" index={1}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="mt-4 p-4 border border-gray-300 rounded">
                          <Product />
                        </div>
                      </div>
                    )}
                  </Draggable>
                )}
                {sections.about && sections.about.show && (
                  <Draggable key="about" draggableId="about" index={2}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="mt-4 p-4 border border-gray-300 rounded">
                          <About />
                        </div>
                      </div>
                    )}
                  </Draggable>
                )}
                {sections.footer && sections.footer.show && (
                  <Draggable key="footer" draggableId="footer" index={3}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="mt-4 p-4 border border-gray-300 rounded">
                          <Footer />
                        </div>
                      </div>
                    )}
                  </Draggable>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default LeftHomePage;
