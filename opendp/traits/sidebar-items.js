window.SIDEBAR_ITEMS = {"fn":[["max_by",""],["min_by",""]],"mod":[["samplers",""]],"trait":[["AlertingAbs","Computes the absolute value and returns an error if overflowing."],["AlertingAdd","Addition that returns an error if overflowing."],["AlertingDiv","Division that returns an error if overflowing."],["AlertingMul","Multiplication that returns an error if overflowing."],["AlertingPow","Raising to the power that returns an error if overflowing."],["AlertingSub","Subtraction that returns an error if overflowing."],["CastInternalReal",""],["CheckNull",""],["DistanceConstant","A type that can be used as a stability or privacy constant to scale a distance. Encapsulates the necessary traits for the new_from_constant method on relations. Making a relation from a constant has the general form d_out = QO::distance_cast(d_in) * c    (where d_out and c have type QO: DistanceConstant) Computing this needs all of the traits DistanceConstant inherits from:"],["ExactIntBounds",""],["ExactIntCast","Fallible casting where the casted value is equal to the original value. Casting fails for any value not between Self::MIN_CONSECUTIVE and Self::MAX_CONSECUTIVE."],["FiniteBounds","Consts representing the maximum and minimum finite representable values."],["Float",""],["FloatBits",""],["Hashable",""],["InfAdd","Performs addition with specified rounding that returns an error if overflowing."],["InfCast","Fallible casting where the casted value rounds towards infinity. This preserves the invariant that the casted value is gte the original value. For example, casting a 128_u8 to i8 doesn’t saturate to i8::MAX (127), it errors."],["InfDiv","Performs division with specified rounding that returns an error if overflowing."],["InfExp","Exponentiates with specified rounding that returns an error if overflowing."],["InfExpM1","Exponentiates and subtracts one with specified rounding."],["InfLn","Computes the natural logarithm with specified rounding that returns an error if overflowing."],["InfLn1P","Takes the logarithm and adds one with specified rounding."],["InfLog2","Computes the base 2 logarithm with specified rounding that returns an error if overflowing."],["InfMul","Performs multiplication with specified rounding that returns an error if overflowing."],["InfPow","Computes self to the power with specified rounding that returns an error if overflowing."],["InfSqrt","Computes the square root with specified rounding that returns an error if overflowing."],["InfSub","Performs subtraction with specified rounding that returns an error if overflowing."],["Integer",""],["Number",""],["Primitive",""],["RoundCast",""],["SaturatingAdd","Addition that saturates at the numeric bounds instead of overflowing."],["SaturatingMul","Multiplication that saturates at the numeric bounds instead of overflowing."],["TotalOrd","TotalOrd is well-defined on types that are Ord on their non-null values. The framework provides a way to ensure values are non-null at runtime. This trait should only be used when the framework can rely on these assurances. TotalOrd shares the same interface as Ord, but with a total_ prefix on methods"]]};